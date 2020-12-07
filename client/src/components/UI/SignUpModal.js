import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import { Formik } from 'formik';
 import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { departments } from '../../configs/departments';


const styles = theme => ({
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
  ...theme.authForm
});

class SignUpModal extends React.Component {

  state = { open: false }
  selections = departments.map(department => (
    <option
      key={department.name}
      value={department.name}
    >
      {department.name}
    </option>));
  
  toggle = () => {
    this.setState({ open: !this.state.open });
  }
   

  renderAuth = () => {
    console.log(this.props)
    if (this.props.auth.isAuthenticated) {
      return(<Redirect to="/"/>);
    } else {
      const { classes } = this.props;
      return (
        <div className={classes.buttonDiv}>
          <Button onClick={this.toggle}  type="submit" className={classes.button} color="secondary" variant="contained">
          Sign up
          </Button>
          <Modal
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          onClose={this.toggle}
          open={this.state.open}
          className={classes.modal}
          >
            <Fade in={this.state.open}>
              <Card className={classes.Card}>
                <div className={classes.head}>
                  <HighlightOffRoundedIcon
                    onClick={this.toggle}
                    className={classes.close}
                  />
                  <Typography  variant="h4">
                    {this.props.title}
                  </Typography>
                </div>
                <Formik
                  initialValues={{
                    department: "",
                    roles:"",
                    regdId: "",
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword:"",
                    currentSemester:""
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
                      currentSemester:Yup.number().required("Semester is required")
                    })}
                  onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values, null, 2));
                        this.props.createNewUser(values);
                        setSubmitting(false);
                    this.toggle();
                    }}
                >
                  {formik => (
                    <form
                    autoComplete="off"
                    className={classes.form}
                    onSubmit={formik.handleSubmit}
                    >
                      {console.log(formik)}
                      <select required
                        {...formik.getFieldProps('department')}
                        className={classes.input}
                        id="department"
                      >
                        <optgroup label="Select Your Department">
                        <option value="" disabled hidden>Select Your Department</option>
                          {this.selections}
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
                      <Button variant="contained" className={classes.button} type="submit">
                        {this.props.auth.isLoading?<CircularProgress color="secondary"/>:"Submit"}
                      </Button>
                    </form>
                  )}
                </Formik>
              </Card>
            </Fade>
          </Modal>
        </div>
     )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderAuth()}
      </React.Fragment>
    )
    
 } 
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    error: state.error
  }
};



export default withStyles(styles)(connect(mapStateToProps, {
  createNewUser,clearErrors
})(SignUpModal));
