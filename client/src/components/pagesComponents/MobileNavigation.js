import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  bottomNav: {
    maxWidth: "100%",
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
});

const MobileNavigation = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (window.location.pathname === '/' && value !== "Home") {
      setValue("Home");
    }else if (window.location.pathname === '/subject' && value !== "Subject") {
      setValue("Subject");
    }else if (window.location.pathname === '/semester' && value !== "Semester") {
      setValue("Semester");
    }else if (window.location.pathname === '/about' && value !== "About") {
      setValue("About");
    }
  },[value]);


  return (
    <React.Fragment>
      <AppBar
        position="fixed" color="primary"
        className={classes.appBar}>
        <BottomNavigation
          value={value}
          onChange={handleChange} className={classes.bottomNav}>
          <BottomNavigationAction
            component={Link}
            to="/"
            value="Home"
            icon={<HomeRoundedIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/subject"
            value="Subject"
            icon={<SearchRoundedIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/semester"
            value="Semester"
            icon={<AddCircleOutlineRoundedIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/about"
            value="About"
            icon={<GroupRoundedIcon />} />
        </BottomNavigation>
      </AppBar>
    </React.Fragment>
  )
}

export default MobileNavigation
