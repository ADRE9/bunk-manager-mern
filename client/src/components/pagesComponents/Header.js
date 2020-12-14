import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//icons
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useTheme } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolBar: {
    ...theme.mixins.toolbar, 
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-1rem",
    }
  },
  AppBar: {
    display: "flex",
    justifyContent:"center",
    padding: 0,
    margin:0,
    height: "5rem",
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    }
  },
  Button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5rem",
    "&:hover": {
      backgroundColor:"transparent"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop:0,
      height: "3rem",
    }
  },
  logo: {
    fontWeight: 400,
    fontSize:"2.5rem",
    fontFamily: "Lobster, cursive",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginTop:0,
    }
  },
  logout: {
    marginLeft: "auto",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      height:"2rem"
    }
  },
  bottomAppBar: {
    top: "auto",
    bottom:0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top:-30
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {

  const classes = useStyles(props);
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const matches=useMediaQuery(theme.breakpoints.down('sm'))

  const handleChange = (event,newValues) => {
    setValue(newValues);
  };

  useEffect(() => {
    if (value !== 0 && window.location.pathname === "/home") {
      setValue(0)
    } else if (value !== 1 && window.location.pathname === "/subjects") {
      setValue(1)
    }else if (value !== 2 && window.location.pathname === "/semester") {
      setValue(2)
    }
  }, [value]);
  
  const renderLogOut = () => {
    if (props.auth.isAuthenticated) {
      return (
        <React.Fragment>
            <Button
            onClick={()=>{props.logoutUser()}}
            className={classes.logout} variant="contained" color="primary">
            LOGOUT
          </Button>
        </React.Fragment>
      );
    }
  }

  const renderAdminTab = () => {
    
    if (props.auth.isAuthenticated) {
      return (
        <React.Fragment>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab component={Link} to="/home" label="Attendance"/>
            <Tab component={Link} to="/subject" label="Subjects"/>
            <Tab component={Link} to="/semester" label="Semester" />
            <Tab component={Link} to="/about" label="About" />
          </Tabs>
        </React.Fragment>
      )
    }
  };

  const renderFab = () => {
    if (value === 1) {
      return (
        <React.Fragment>
            <Fab color="secondary" className={classes.fabButton}>
                <AddIcon/>
            </Fab>
        </React.Fragment>
      )
    }else if (value === 2) {
      return (
            <Fab color="secondary" className={classes.fabButton}>
                <AddIcon/>
            </Fab>
      )
    }
  };

  const renderAdminBottomTab = () => {
    if (props.auth.isAuthenticated) {
      return (
        <React.Fragment>
          <AppBar position="fixed" className={classes.bottomAppBar}>
            <BottomNavigation position="fixed" value={value} onChange={handleChange} >
              <BottomNavigationAction component={Link} to="/home" value={0} icon={<HomeRoundedIcon />} />
              <BottomNavigationAction component={Link} to="/subject" value={1} icon={<SubjectRoundedIcon />} />
              {renderFab()}
              <BottomNavigationAction component={Link} to="/semester"  value={2} icon={<SchoolRoundedIcon />} />
              <BottomNavigationAction component={Link} to="/about"  value={3} icon={<InfoRoundedIcon />} />
            </BottomNavigation>
          </AppBar>
        </React.Fragment>
      )
    }
  };

  return ( 
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar color="secondary" className={classes.AppBar}>
          <Toolbar disableGutters>
            <Button onClick={()=>setValue(0)} className={classes.Button }component={Link} to="/" disableRipple>
              <Typography variant="h5" className={classes.logo}>
                BUNK MANAGER
              </Typography>
            </Button>
            {matches ? null : renderAdminTab()}
            {renderLogOut()}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBar} />
      {matches?renderAdminBottomTab():null}
    </React.Fragment>
   );
}

const mapStateToProps = (state) => {
  return {auth:state.auth}
};
 
export default connect(mapStateToProps, {
  logoutUser
})(Header);