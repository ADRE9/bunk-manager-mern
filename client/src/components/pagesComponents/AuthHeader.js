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
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import { useTheme } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link,useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createActiveSubject } from '../../actions/subjectActions';

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


const AuthHeader = (props) => {
  const classes = useStyles(props);
  const [tab, setTab] = useState(0);
  const theme = useTheme();

  const matches=useMediaQuery(theme.breakpoints.down('sm'))

  const handleChange = (newValues) => {
    setTab(newValues);
  };

  useEffect(() => {
    if (tab !== 0 && window.location.pathname === "/") {
      setTab(0)
    } else if (tab !== 1 && window.location.pathname === "/subject") {
      setTab(1)
    }else if (tab !== 2 && window.location.pathname === "/semester") {
      setTab(2)
    }else if (tab !== 3 && window.location.pathname === "/about") {
      setTab(3)
    }console.log(tab)
  }, [tab]);

  const renderAdminTab = () => {
    
    if (!matches) {
      return (
        <React.Fragment>
          <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
            <Tab component={Link} to="/" label="Attendance"/>
            <Tab component={Link} to="/subject" label="Subjects"/>
            <Tab component={Link} to="/semester" label="Semester" />
            <Tab component={Link} to="/about" label="About" />
          </Tabs>
        </React.Fragment>
      )
    }
  };


  const renderAdminBottomTab = () => {
    if (matches) {
      return (
        <React.Fragment>
          <AppBar position="fixed" className={classes.bottomAppBar}>
            <BottomNavigation position="fixed" value={tab} onChange={handleChange} >
              <BottomNavigationAction component={Link} to="/" icon={<HomeRoundedIcon />} />
              <BottomNavigationAction component={Link} to="/subject" icon={<SubjectRoundedIcon />} />
              <BottomNavigationAction component={Link} to="/semester"  icon={<SchoolRoundedIcon />} />
              <BottomNavigationAction component={Link} to="/about" icon={<InfoRoundedIcon />} />
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
            <Button onClick={()=>setTab(0)} className={classes.Button }component={Link} to="/" disableRipple>
              <Typography variant="h5" className={classes.logo}>
                BUNK MANAGER
              </Typography>
            </Button>
            {renderAdminTab()}
            <Button
              onClick={() =>  props.logoutUser()}
              className={classes.logout} variant="contained" color="primary">
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBar} />
      {renderAdminBottomTab()}
    </React.Fragment>
  )
}

export default connect(null, {
  logoutUser,createActiveSubject
})(AuthHeader);
