import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolBar: {
    ...theme.mixins.toolbar,
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0rem",
    }
  },
  AppBar: {
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
      height: "3rem",
    }
  },
  logo: {
    fontWeight: 400,
    fontSize:"2.5rem",
    fontFamily: "Lobster, cursive",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize:"1.5rem",
    }
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

  return ( 
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar color="secondary" className={classes.AppBar}>
          <Toolbar>
            <Button className={classes.Button }component={Link} to="/" disableRipple>
              <Typography variant="h5" className={classes.logo}>
                BUNK MANAGER
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBar }/>
    </React.Fragment>
   );
}
 
export default Header;