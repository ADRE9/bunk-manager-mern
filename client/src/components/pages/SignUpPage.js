import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from 'formik';
 import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { setTablePage } from '../../actions/authActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { departments } from '../../configs/departments';
import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  modal: {
    opacity:1
  },
  Card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%,-50%)",
    width: "30%",
    height: "90vh",
    display: "flex",
    margin:"auto",
    flexDirection: "column",
    borderRadius: "15px",
    backgroundColor: "white",
    outline: 'none',
    [theme.breakpoints.down('sm')]: {
      width: "90%",
    height: "80vh",
    }
  },
  head: {
    width: "100%",
    position:"relative",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    height: "12%",
    backgroundColor: "#FD0054",
    backgroundImage: "linear-gradient(147deg, #FD0054 0%, #A80038 74%)",
    color: "white",
    fontFamily: "Montserrat, sans-serif",
  },
  buttonDiv: {
    display: "flex",
    position: "absolute",
    bottom:"10%",
    flexDirection: "column",
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    width: "150px",
    borderRadius: "30px",
    fontFamily: "Montserrat, sans-serif",
  },
  button: {
    ...theme.authForm.button,
    width:"150px",
  },
  close: {
    position: "absolute",
    top: "50%",
    right: "5%",
    transform: "translate(5%,-50%)",
    "&:hover": {
      cursor:"pointer"
    }
  },
  errorMsg: {
    display:"flex",
    width: "100%",
    color: "red",
    justifyContent:"center"
  },
  ...theme.authForm,
  input: {
    ...theme.authForm.input,
    [theme.breakpoints.down('sm')]: {
      width:"90%"
    }
  },
  ...theme.pages,
  container: {
    height:"100vh",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    }
  },
  Heading: {
    width:"100%",
    display: "flex",
    justifyContent:"center"
  }
}));

const SignUpPage = (props) => {

  const classes = useStyles();
  const selections = departments.map(department => (
    <option
      key={department.name}
      value={department.name}
    >
      {department.name}
    </option>));
  
  //let location = props.location;
  //
  
  const newUser = (values) => {
    props.createNewUser(values,from)
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      
    },
    visible: {
      opacity: 1,
      transition: {
        delay:0.5,
        duration:0.5
      }
    },
    exit: {
      x: "-100vw",
      transition:{ease:"easeInOut"}
    }
  }
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/timetable" } };

  return (
      <motion.div variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" className={classes.page}>
      <Container className={classes.container}>
        <div className={classes.Heading}>
        <Typography center variant="h2">SIGN UP</Typography>
        </div>
          {props.error.msg ? <div className={classes.errorMsg}>{props.error.msg.msg}</div> : null}
          <Formik
            initialValues={{
              department: "",
              roles: "",
              regdId: "",
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              currentSemester: ""
            }}
            validationSchema={Yup.object(
              {
                department: Yup.string('Enter Your Department').required('Department is required'),
                roles: Yup.string('').required('Select a role'),
                regdId: Yup.string('Enter Registration ID').min(6, "Too Short").required('Registration ID is required'),
                name: Yup.string('Enter Your Name').required('Name is Required'),
                email: Yup.string('Enter Email').email('Invalid Email').required('Email is required'),
                password: Yup.string('').min(7, "Too Short").max(20, "Too long").required("Password is required"),
                confirmPassword: Yup.string('').required("Confirm Password is required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
                currentSemester: Yup.number().min(1, "Invalid Semester").max(8, "Invalid Semester").required("Semester is required")
              })}
            onSubmit={async (values, { setSubmitting }) => {
              newUser(values);
              setSubmitting(false);
            }}
          >
            {formik => (
              <form
                autoComplete="off"
                className={classes.form}
                onSubmit={formik.handleSubmit}
              >
                <select required
                  {...formik.getFieldProps('department')}
                  className={classes.input}
                  id="department"
                >
                  <optgroup label="Select Your Department">
                    <option value="" disabled hidden>Select Your Department</option>
                    {selections}
                  </optgroup>
                </select>
                {formik.touched.department && formik.errors.department ? (
                  <div>{formik.errors.department}</div>
                ) : null}
                        
                <select required
                  {...formik.getFieldProps('roles')}
                  className={classes.input}
                  id="roles"
                >
                  <optgroup label="Select Your Role">
                    <option value="" disabled hidden>Select Your Role</option>
                    <option value="admin">Admin</option>
                    <option value="cr">CR</option>
                    <option value="student">Student</option>
                  </optgroup>
                </select>
                {formik.touched.roles && formik.errors.roles ? (
                  <div>{formik.errors.roles}</div>
                ) : null}
                <input
                  {...formik.getFieldProps('name')}
                  placeholder="Name"
                  type="text" id="name"
                  className={classes.input}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
                <input
                  {...formik.getFieldProps('regdId')}
                  placeholder="Registration ID"
                  type="text" id="regdId"
                  className={classes.input}
                />
                {formik.touched.regdId && formik.errors.regdId ? (
                  <div>{formik.errors.regdId}</div>
                ) : null}
                <input
                  {...formik.getFieldProps('email')}
                  placeholder="Email"
                  type="email" id="email"
                  className={classes.input}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <input
                  {...formik.getFieldProps('password')}
                  placeholder="Password"
                  type="password" id="password"
                  className={classes.input}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
                <input
                  {...formik.getFieldProps('confirmPassword')}
                  placeholder="Confirm Password"
                  type="password" id="confirmPassword"
                  className={classes.input}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div>{formik.errors.confirmPassword}</div>
                ) : null}
                <input
                  {...formik.getFieldProps('currentSemester')}
                  placeholder="Current Semester"
                  type="text" id="currentSemester"
                  className={classes.input}
                />
                {formik.touched.currentSemester && formik.errors.currentSemester ? (
                  <div>{formik.errors.currentSemester}</div>
                ) : null}
                <Button onClick={() => props.setTablePage()} variant="contained" className={classes.button} type="submit">
                  {props.auth.isLoading ? <CircularProgress color="secondary" /> : "Submit"}
                </Button>
              </form>
            )}
          </Formik>
        </Container>
    </motion.div>
  )
};

const mapStateToProps = (state) => {
  return {auth: state.auth,
    error: state.error,
    tablePage: state.table.isTableOpen}
}

export default connect(mapStateToProps, {
  createNewUser, clearErrors, setTablePage
})(SignUpPage)
