import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SubjectIcon from "@material-ui/icons/Subject";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  bottomNav: {
    maxWidth: "100%",
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
});

const MobileNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (window.location.pathname === "/" && value !== "Home") {
      setValue("Home");
    } else if (window.location.pathname === "/subject" && value !== "Subject") {
      setValue("Subject");
    } else if (
      window.location.pathname === "/semester" &&
      value !== "Semester"
    ) {
      setValue("Semester");
    } else if (window.location.pathname === "/about" && value !== "About") {
      setValue("About");
    }
  }, [value]);

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            value="Home"
            icon={<HomeRoundedIcon />}
            label="Home"
          />
          <BottomNavigationAction
            component={Link}
            to="/subject"
            value="Subject"
            icon={<SubjectIcon />}
            label="Subject"
          />
          <BottomNavigationAction
            component={Link}
            to="/semester"
            value="Semester"
            icon={<SchoolRoundedIcon />}
            label="Semester"
          />
          <BottomNavigationAction
            component={Link}
            to="/about"
            value="About"
            icon={<MailOutlineRoundedIcon />}
            label="About"
          />
        </BottomNavigation>
      </AppBar>
    </React.Fragment>
  );
};

export default MobileNavigation;
