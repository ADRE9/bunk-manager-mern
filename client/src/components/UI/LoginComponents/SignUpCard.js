import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import { createUser,createCrUser } from '../../../actions';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Divider from '@material-ui/core/Divider';
import { motion } from 'framer-motion';

import SignUpModal from '../SignUpModal';


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
    width: "130px",
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
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


  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  }

  return ( 
    <React.Fragment>
      <SignUpModal title="SIGN UP" close={handleClose} open={open} />
      <Typography color="primary" className={classes.signUpHeader} variant="h5">
        Sign Up
      </Typography>
      <Typography color="primary" className={classes.p} variant="h7">
        using
      </Typography>
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
      <div className={classes.buttonDiv}>
        <Button onClick={()=>handleOpen()} type="submit" className={classes.button} color="secondary" variant="contained">
          Sign up
        </Button>
      </div>
    </React.Fragment>
   );
}
 
export default connect(null,{createUser,createCrUser})(SignUpCard);