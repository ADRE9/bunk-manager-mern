import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useFormik } from "formik";
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/authActions';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { departments } from '../../configs/departments';


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
    width:"150px"
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
  buttonDivModal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width:"100%"
  },
  ...theme.authForm
}));


const SignUpModal = (props) => {

  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

//sign up schema
const validationSchema = yup.object().shape({
  department:yup.string().required('Department is required') ,
  roles:yup.string().required('Roles are required'),
  regdId:yup.string().required('Registration Id is required') ,
  name: yup.string().required('Name is required'),
  email:yup.string().email().required('Email is required') ,
  password:yup.string().required('Password is required').min(8,"Not too short! DOnt be lazy") ,
  confirmPassword:yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
  semester:yup.number().required('Semester is required').positive().integer()
})  


  const formik = useFormik({
    initialValues: {
      department: "",
      roles:"",
      regdId: "",
      name: "",
      email: "",
      password: "",
      confirmPassword:"",
      semester:""
    },
    validationSchema:validationSchema,
    onSubmit: (values) => {
      props.createNewUser(values);
    }
  });

  const handleClose = () => {
    formik.handleReset()
    setOpen(false);
  };

  const select = departments.map(department => (
    <option
      key={department.name}
      value={department.name}
    >
      {department.name}
    </option>));
  

  
  return (
    <div className={classes.buttonDiv}>
      
      <Button onClick={handleOpen}  type="submit" className={classes.button} color="secondary" variant="contained">
        Sign up
      </Button>
      <Modal
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={handleClose}
        open={open}
        className={classes.modal}
      >
        <Fade in={open}>
        <Card className={classes.Card}>
            <div className={classes.head}>
              <HighlightOffRoundedIcon onClick={handleClose} className={classes.close}/>
              <Typography  variant="h4">
                {props.title}
              </Typography>
            </div>
            <form
              autoComplete="off"
              className={classes.form}
              onSubmit={formik.handleSubmit}
            >
              <select
                name="department"
                value={formik.values.department}
                onChange={formik.handleChange}
                placeholder="Department"
                className={classes.input}>
                <optgroup label="Select Your Department">
                  <option value="" disabled hidden>Choose a Department</option>
                  {select}
                </optgroup>
              </select>
              <select
                name="roles"
                value={formik.values.roles}
                onChange={formik.handleChange}
                className={classes.input}>
                <optgroup label="Select Your Role">
                  <option value="" disabled hidden>Choose a Role</option>
                  <option value="admin">
                    ADMIN
                  </option>
                  <option value="cr">
                    CR
                  </option>
                  <option value="student">
                    STUDENT
                  </option>
                </optgroup>
              </select>
              <input 
                type="text"
              value={formik.values.regdId}
              placeholder="Registration ID"
              onChange={formik.handleChange}
              error={formik.touched.regdId && (Boolean(formik.errors.regdId)).toString()}
              name="regdId"
              className={classes.input} />
              {formik.errors.regdId && formik.touched.regdId ? (<div>{formik.errors.regdId}</div>) : null}
              <input
                type="text"
                value={formik.values.name}
                placeholder="Name"
              onChange={formik.handleChange}
              error={formik.touched.name && (Boolean(formik.errors.name)).toString()}
              name="name"
              className={classes.input} />
              {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
              <input 
                type="email"
                value={formik.values.email} placeholder="Email"
                onChange={formik.handleChange}
                error={formik.touched.email && (Boolean(formik.errors.email)).toString()} name="email" className={classes.input} />
              {formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : null}
              <input type="password" value={formik.values.password} placeholder="Password"
                onChange={formik.handleChange}
                error={formik.touched.password && (Boolean(formik.errors.password)).toString()} name="password" className={classes.input} />
              {formik.errors.password && formik.touched.password ? (<div>{formik.errors.password}</div>) : null}
              <input type="password" value={formik.values.confirmPassword} placeholder="Confirm Password"
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && (Boolean(formik.errors.confirmPassword)).toString()} name="confirmPassword" className={classes.input} />
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? (<div>{formik.errors.confirmPassword}</div>) : null}
              <input type="text" value={formik.values.semester} placeholder="Semester"
                onChange={formik.handleChange}
                error={formik.touched.semester && (Boolean(formik.errors.semester)).toString()} name="semester" className={classes.input} />
              {formik.errors.semester ? (<div>{formik.errors.semester}</div>) : null}
              <button type="Submit">
                Submit
              </button>
            </form>
          </Card>
        </Fade>
        </Modal>
    </div>
    
  )
}

export default connect(null, {
  createNewUser,
})(SignUpModal);
