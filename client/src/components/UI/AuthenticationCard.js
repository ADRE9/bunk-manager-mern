import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';

import LoginCard from './LoginComponents/LoginCard';
import SignUpCard from './LoginComponents/SignUpCard';


//styles
const useStyles = makeStyles(theme => ({
  card: {
    marginTop:"2rem",
    width: "80%",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5),0px 0px 20px rgba(0,0,0,0.3),0px 0px 30px rgba(0,0,0,0.2)",
    position:"relative"
  },
  signIn: {
    display: "flex",
    position:"absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    top: 0,
    left: 0,
    width: "100%",
    height: "50%",
    zIndex:5,
    backgroundColor:"white",
  },
  signUp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems:"center",
    top: 0,
    left: 0,
    width: "100%",
    height: "50%",
    zIndex: 3,
    backgroundColor:"white",
  },
  overlay: {
    top: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    height: "100%",
    backgroundColor: "#FD0054",
    backgroundImage: "linear-gradient(147deg, #FD0054 0%, #A80038 74%)",
    zIndex:4,
  },
  overlayTop: {
    display: "flex",
    position:"absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    top: 0,
    left: 0,
    width: "100%",
    height: "50%",
  },
  overlayBottom: {
    display: "flex",
    position:"absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    top: "50%",
    left: 0,
    width: "100%",
    height: "50%",
  },
  overlayHeader: {
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontWeight:500,
    margin:"10px 20px",
  },
  overlaySubHeader: {
    margin:"10px 0px",
    color: "white",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontWeight:500,
  },
  overlayButton: {
    margin:"10px 0px",
    width: "130px",
    border: "2px white solid",
    borderRadius: "30px",
    backgroundColor:"transparent",
  }
}));


const AuthenticationCard = (props) => {


  //material ui classes
  const classes = useStyles(props);

  //animation objects
  const [signInAnimation, setSignInAnimation] = useState({});
  const [signUpAnimation, setSignUpAnimation] = useState({});
  const [overlayTopAnimation, setOverlayTopAnimation] = useState({});
  const [overlayBottomAnimation, setOverlayBottomAnimation] = useState({});

  //animation starts on clicking  SIGN UP button
  const onClickSignUp = () => {
    setSignInAnimation({
      initial: {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: 5
      },
      final: {
        opacity: 0,
        transform: "translateY(100%)",
        zIndex: 3
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
    setSignUpAnimation({
      initial: {
        opacity: 0,
        transform: "translateY(0%)",
        zIndex: 3,
      },
      final: {
        opacity: 1,
        transform: "translateY(100%)",
        zIndex: 5
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
    setOverlayTopAnimation({
      initial: {
        opacity: 0,
        transform: "translateY(100%)",
        zIndex: 4,
      },
      final: {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: 5,
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
    setOverlayBottomAnimation({
      initial: {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: 4,
      },
      final: {
        opacity: 0,
        transform: "translateY(-100%)",
        zIndex: 3,
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
  };


  //animation starts on clicking  SIGN IN button
  const onClickSignIn = () => {
    setSignInAnimation({
      initial: {
        opacity: 0,
        transform: "translateY(100%)",
        zIndex: 3
      },
      final: {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: 5
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
    setSignUpAnimation({
      initial: {
        opacity: 1,
        transform: "translateY(100%)",
        zIndex: 5,
      },
      final: {
        opacity: 0,
        transform: "translateY(0%)",
        zIndex: 3
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
    setOverlayTopAnimation({
      initial: {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: 5,
      },
      final: {
        opacity: 0,
        transform: "translateY(100%)",
        zIndex: 3,
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
    setOverlayBottomAnimation({
      initial: {
        opacity: 0,
        transform: "translateY(-100%)",
        zIndex: 4,
      },
      final: {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: 4,
      },
      transition: {
        duration: 0.6,
        type: "spring",
      }
    });
  };


  return (
    <Card className={classes.card}>
      <motion.div
        variants={signInAnimation}
        initial={signInAnimation.initial}
        animate={signInAnimation.final}
        transition={signInAnimation.transition}
        className={classes.signIn}>
        <LoginCard/>
      </motion.div>
      <motion.div
        variants={signUpAnimation}
        initial={signUpAnimation.initial}
        animate={signUpAnimation.final}
        transition={signUpAnimation.transition}
        className={classes.signUp}>
        <SignUpCard/>
      </motion.div>
      <div className={classes.overlay}>
        <motion.div
          variants={overlayTopAnimation}
          initial={overlayTopAnimation.initial}
          animate={overlayTopAnimation.final}
          transition={overlayTopAnimation.transition}
          className={classes.overlayTop}>
          <Typography className={classes.overlayHeader} variant="h5">
            Welcome back buddy!
          </Typography>
          <Typography className={classes.overlaySubHeader} variant="h6">
            Lets carry on where we left
          </Typography>
          <Button onClick={() => onClickSignIn()}
            className={classes.overlayButton} color="secondary" variant="contained">
            Sign in
          </Button>
        </motion.div>
        <motion.div
          variants={overlayBottomAnimation}
          initial={overlayBottomAnimation.initial}
          animate={overlayBottomAnimation.final}
          transition={overlayBottomAnimation.transition}
          className={classes.overlayBottom}>
          <Typography className={classes.overlayHeader} variant="h5">
            Want us to manage your attendance?
            </Typography>
          <Typography className={classes.overlaySubHeader} variant="h6">
            Because bunking is an art
            </Typography>
          <Button
            onClick={() => onClickSignUp()}
            className={classes.overlayButton} color="secondary" variant="contained">
            Sign up
            </Button>
        </motion.div>
      </div>
    </Card>
  );
};

 
export default AuthenticationCard;
