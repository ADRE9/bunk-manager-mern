import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginTop:"1rem"
  },
  logoContainer: {
    height: "5rem",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    ...theme.typography.logo,
  },
  appBar:{
    backgroundColor:theme.palette.common.white,
  },
}));

const Header = (props) => {

  const classes = useStyles(props);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.appBar }>
          <Toolbar>
            <Button
              component={Link}
              to='/'
              disableRipple
              color="secondary"
              className={classes.logoContainer}
            >
              <Typography variant="h4" color="secondary" className={classes.logo}>
                Bunk Manager<br />
                <Typography color="secondary">
                  (Because BUNKING is an Art)
                  </Typography>
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin }/>
    </React.Fragment>
  );
}
 
export default Header;