import React,{useState} from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import { createUser,createCrUser } from '../../../actions';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  signUpHeader: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    marginTop: "10px",
    marginBottom: "0",
    textTransform: "uppercase"
  },
  input: {
    margin: "10px 0px",
    width: "80%",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black",
    paddingLeft: "1rem",
    "&:focus": {
      outline: "none"
    },
    "&::placeholder": {
      fontFamily: "Montserrat, sans-serif",
      color: "black",
      fontWeight: 400,
    }
  },
  form: {
    display: "flex",
    width: "100%",
    margin: 0,
    padding: 0,
    flexDirection: "column",
    justifyContent: "start",
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
    backgroundColor: "#FD0054",
    backgroundImage: "linear-gradient(147deg, #FD0054 0%, #FD0054 74%)",
  }
}));

const signUpSchema = yup.object({
  name: yup
    .string('Enter Username')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Username is required'),
  email: yup
    .string('Enter Email')
    .email('Email is Invalid')
    .required('Email is Required'),
  password: yup
    .string('')
    .min(8, 'Password should be of minimum 7 characters length')
    .required('Password is required')
})

const SignUpCard = (props) => {


  const classes = useStyles(props);
  const [signUpToggler, setSignUpToggler] = useState();

  const onSignUpClick = () => {
    setSignUpToggler(false);
  }

  const onSignUpAsCrClick = () => {
    setSignUpToggler(true);
  }

  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: ""
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      if (signUpToggler) {
        props.createCrUser(values);
      } else if (!signUpToggler) {
        props.createUser(values);
      }
    },
  })

  return ( 
    <React.Fragment>
      <Typography color="primary" className={classes.signUpHeader} variant="h5">
          Sign Up
          </Typography>
        <form
          onSubmit={formik.handleSubmit}
          className={classes.form}
        >
          <input
            id="name"
            name="name"
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name).toString()}
            required
            placeholder="Username"
            type="text"
            className={classes.input}
            value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email).toString()}
            required
            placeholder="Email"
            type="text"
            className={classes.input}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <input
            id="password"
            name="password"
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password).toString()}
            required
            value={formik.values.password}
            placeholder="Password"
            type="password"
            className={classes.input}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <div>
          <Button
            onClick={()=>onSignUpClick()}
              type="submit"
              className={classes.button} color="secondary"
              variant="contained"
            >
            Sign Up
            </Button>
            <Button
            onClick={()=>onSignUpAsCrClick()}
              type="submit"
              className={classes.signUpButton} color="secondary"
              variant="contained"
            >
              Sign Up As cr
            </Button>
          </div>
        </form>
    </React.Fragment>
   );
}
 
export default connect(null,{createUser,createCrUser})(SignUpCard);