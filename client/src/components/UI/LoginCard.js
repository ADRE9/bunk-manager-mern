import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {createUser,createCrUser} from '../../actions'

//validation Schema
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
});

//styles
const useStyles = makeStyles(theme => ({
  card: {
    marginTop:"2rem",
    width: "80%",
    height: "80vh",
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
    justifyContent: "center",
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
    backgroundImage: "linear-gradient(147deg, #A80038 0%,  #FD0054 74%)",
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
  loginHeader: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    marginTop: "2rem",
    marginBottom: "0",
    textTransform:"uppercase"
  },
  signUpHeader: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    marginTop: "2rem",
    marginBottom: "0",
    textTransform:"uppercase"
  },
  input: {
    margin: "10px 0px",
    width: "80%",
    height:"30px",
    borderRadius: "15px", 
    border: "1px solid black",
    paddingLeft:"1rem",
    "&:focus": {
      outline:"none"
    },
    "&::placeholder": {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontWeight:400,
    }
  },
  form: {
    display:"flex",
    width: "100%",
    margin: 0,
    padding:0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  button: {
    borderRadius: "30px",
    width: "130px",
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#FD0054",
    backgroundImage: "linear-gradient(147deg, #FD0054 0%, #FD0054 74%)",
  },
  signUpButton: {
    borderRadius: "30px",
    width: "150px",
    marginLeft:"10px",
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#2B2024",
    backgroundImage: "linear-gradient(147deg,#A80038 0%, #A80038 74%)",
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


const LoginCard = (props) => {


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

  //useFormik Hooks
  const formik = useFormik({
    initialValues: {
      email: "abc@xyz.com",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.createUser(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card className={classes.card}>
      <motion.div
        variants={signInAnimation}
        initial={signInAnimation.initial}
        animate={signInAnimation.final}
        transition={signInAnimation.transition}
        className={classes.signIn}>
        <Typography color="primary" className={classes.loginHeader} variant="h5">
          Sign In
        </Typography>
        
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={formik.handleSubmit}
        >
          <input
            id="email-login"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            variant="outlined"
            name="email-login"
            placeholder="Username or Email"
            type="text"
            className={classes.input}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <input
            name="password-login"
            placeholder="Password"
            type="password"
            className={classes.input}
            id="password-login"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <Button type="submit" className={classes.button} color="secondary" variant="contained">
            Sign In
                </Button>
        </form>
      </motion.div>
      <motion.div
        variants={signUpAnimation}
        initial={signUpAnimation.initial}
        animate={signUpAnimation.final}
        transition={signUpAnimation.transition}
        className={classes.signUp}>
        <Typography color="primary" className={classes.signUpHeader} variant="h5">
          Sign Up
          </Typography>
        <form
          onSubmit={formik.handleSubmit}
          className={classes.form}
        >
          <input
            id="email-signup"
            name="email-signup"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            required
            placeholder="Username or Email"
            type="text"
            className={classes.input}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <input
            id="password-signup"
            name="password-signup"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            required
            value={formik.values.password}
            placeholder="Password"
            type="password"
            className={classes.input}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <div>
            <Button
              type="submit"
              className={classes.button} color="secondary"
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
        </form>
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

 
export default connect(null, {
  createUser,createCrUser
})(LoginCard);
