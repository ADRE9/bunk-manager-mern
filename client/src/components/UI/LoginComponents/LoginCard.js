import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { loggingUser } from '../../../actions/authActions';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  ...theme.authForm,
  button: {
    ...theme.authForm.button,
    display: "flex",
    
    width: "130px",
  },
}));

const loginSchema = yup.object({
  email: yup.string('Enter Email').email('Email is Invalid').required('Email is Required'),
  password:yup.string('').min(8,'Password should be of minimum 7 characters length').required('Password is required')
})

const LoginCard = (props) => {

  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
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
      props.loggingUser(values,from);
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
        {props.error ? <div>{props.error.msg}</div>:null}
          <input
            id="login-email"
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
            id="login-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password).toString()}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <Button type="submit" className={classes.button} color="secondary" variant="contained">
          {props.auth.isLoading?<CircularProgress color="primary"/>:"Sign In"}
          </Button>
        </form>
    </React.Fragment>
   );
}

const mapStateToProps = (state) => {
  return {auth:state.auth,error:state.error.msg };
};
 
export default withRouter(connect(mapStateToProps,
  {
    loggingUser
  }
)(LoginCard));