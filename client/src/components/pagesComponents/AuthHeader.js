import React, { useState, useEffect, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileNavigation from "./MobileNavigation";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

//icons
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import { createActiveSubject } from "../../actions/subjectActions";
import { Switch } from "@material-ui/core";
import { DarkThemeContext } from "../../providers/DarkThemeProvider";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    ...theme.mixins.toolbar,
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-1rem",
    },
  },
  AppBar: {
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    height: "5rem",
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    },
  },
  Button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      height: "3rem",
    },
  },
  logo: {
    fontWeight: 400,
    fontSize: "2.5em",
    fontFamily: "Lobster, cursive",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginTop: 0,
    },
  },
  logout: {
    marginLeft: "auto",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      height: "2rem",
    },
  },
  bottomAppBar: {
    top: "auto",
    bottom: 0,
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
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);

  const [value, setValue] = useState(0);
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (newValues) => {
    setValue(newValues);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (location.pathname === "/subject" && value !== 1) {
      setValue(1);
    } else if (location.pathname === "/semester" && value !== 2) {
      setValue(2);
    } else if (location.pathname === "/about" && value !== 3) {
      setValue(3);
    }
  }, [value, location]);

  const renderAdminTab = () => {
    if (!matches && props.isAuthenticated) {
      return (
        <React.Fragment>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab value={0} component={Link} to="/" label="Today" />
            <Tab value={1} component={Link} to="/subject" label="Subjects" />
            <Tab value={2} component={Link} to="/semester" label="Semester" />
            <Tab value={3} component={Link} to="/about" label="About" />
          </Tabs>
        </React.Fragment>
      );
    }
  };

  const renderAdminBottomTab = () => {
    if (matches && props.isAuthenticated) {
      return (
        <React.Fragment>
          <MobileNavigation />
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar color="secondary" className={classes.AppBar}>
          <Toolbar disableGutters>
            <Button
              onClick={() => setValue(0)}
              className={classes.Button}
              value={0}
              component={Link}
              to="/"
              disableRipple
            >
              <Typography variant="h5" className={classes.logo}>
                BUNK MANAGER
              </Typography>
            </Button>
            {props.tablePage? null: renderAdminTab()} 
            {props.isAuthenticated && <Button
              onClick={() => props.logoutUser()}
              className={classes.logout} variant="contained" color="primary">
              LOGOUT
            </Button>}
            {/* Switch to change the theme */}
            {/* <Switch
              color="primary"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            /> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBar} />
      {renderAdminBottomTab()}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated, tablePage: state.table.isTableOpen }
}

export default connect(mapStateToProps, {
  logoutUser,
  createActiveSubject,
})(AuthHeader);
