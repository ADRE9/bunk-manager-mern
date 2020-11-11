import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {connect} from 'react-redux';
import { loginUser } from '../../../actions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  loginHeader: {
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
}));

const loginSchema = yup.object({
  email: yup.string('Enter Email').email('Email is Invalid').required('Email is Required'),
  password:yup.string('').min(8,'Password should be of minimum 7 characters length').required('Password is required')
})

const LoginCard = (props) => {

  //styles
  const classes = useStyles(props);

  //formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      props.loginUser(values);
    },
  });

  return ( 
    <React.Fragment>
      <Typography color="primary" className={classes.loginHeader} variant="h5">
          Sign In
      </Typography>
      <form
          autoComplete="off"
          className={classes.form}
          onSubmit={formik.handleSubmit}
        >
          <input
            id="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email).toString()}
            variant="outlined"
            name="email"
            placeholder="Username or Email"
            type="text"
            className={classes.input}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <input
            name="password"
            placeholder="Password"
            type="password"
            className={classes.input}
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password).toString()}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <Button type="submit" className={classes.button} color="secondary" variant="contained">
            Sign In
                </Button>
        </form>
    </React.Fragment>
   );
}
 
export default connect(null,{loginUser})(LoginCard);