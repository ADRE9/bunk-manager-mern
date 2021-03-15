import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Divider from '@material-ui/core/Divider';
import { ThemeContext } from '../../../providers/ChangeThemeProvider';


const useStyles = makeStyles(theme => ({
  signUpHeader: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    marginTop: "10px",
    marginBottom: "0",
    textTransform: "uppercase"
  },
  button: {
    ...theme.authForm.button,
    width: "150px",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  oAuthDiv: {
    display: "flex",
    flexDirection: "row",
    height:"20%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      height:"20%",
    }
  },
  fb: {
    margin: "0 0.5rem",
    color: "blue",
    fontSize:"35px"
  },
  insta: {
    margin: "0 0.5rem",
    color: "red",
    fontSize:"35px"
  }
}));


const SignUpCard = (props) => {

  const { newTheme } = useContext(ThemeContext);
  const classes = useStyles(props);

  let buttonStyle = {
    backgroundImage: 'linear-gradient(147deg, #FD0054 0%, #FD0054 74%)',
    color : '#fff'

  }

  if (newTheme === 'light') {
    buttonStyle = {
      backgroundImage: 'linear-gradient(147deg, #12CBC4 0%, #12CBC4 74%)',
      color : '#000'
    }
  }

  return ( 
    <React.Fragment>
      <Typography color="primary" className={classes.signUpHeader} variant="h5">
        Sign Up
      </Typography>
      <p>
        using
      </p>
      <div className={classes.oAuthDiv}>
        <Button>
          <FacebookIcon className={classes.fb}/>
        </Button>
        <Button>
          <InstagramIcon className={classes.insta}/>
        </Button>
      </div>
      <Typography color="primary" className={classes.p} variant="h6">
      <Divider/>OR
      </Typography>
        <Button className={classes.button} component={Link} to="/user/signup" style={ buttonStyle }>
          Sign Up
        </Button>
    </React.Fragment>
   );
}
 
export default connect(null, {})(SignUpCard);

//<SignUpModal title="SIGN UP"/>