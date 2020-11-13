import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useFormik } from "formik";
import * as yup from 'yup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    height: "12%",
    backgroundColor: "#FD0054",
    backgroundImage: "linear-gradient(147deg, #FD0054 0%, #A80038 74%)",
    color: "white",
    fontFamily: "Montserrat, sans-serif",
  },
  button: {
    ...theme.authForm.button,
    width:"150px"
  },
  ...theme.authForm
}));

//sign up schema
const signUpSchema = yup.object({
  regdId: yup.string('Enter Registration ID').min(6, "Too Short").required('Registration ID is required'),
  name: yup.string('Enter Your Name').required('Name is Required'),
  email: yup.string('Enter Email').email('Invalid Email').required('Email is required'),
  password: yup.string('').min(7, "Too Short").max(20, "Too long").required("Password is required"),
  confirmPassword: yup.string().required().test('password match', "password doesnt match", function (value) { return this.parent.password === value; }),
  semester:yup.number().required().min(1,"Cannot be less than 1")
})

const SignUpModal = (props) => {

  const classes = useStyles(props);
  const [toggleCrSignUp, setToggleCrSignUp] = useState(false);

  const formik = useFormik({
    initialValues: {
      regdId: "",
      name: "",
      email: "",
      password: "",
      semester:""
    },
    validationSchema: signUpSchema,
    onSubmit:(values) => {
      if (toggleCrSignUp) {
        
      } else {
        
      }
    }
  });

  return (
    <Modal
      onClose={props.close}
      open={props.open}
      className={classes.modal}
    >
      <Card className={classes.Card}>
        <div className={classes.head}>
          <Typography variant="h4">{ props.title}</Typography>
        </div>
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={formik.handleSubmit}
        >
          <input
            id="regdId"
            label="Registration Id"
            value={formik.values.regdId}
            onChange={formik.handleChange}
            error={formik.touched.regdId && Boolean(formik.errors.regdId).toString()}
            variant="outlined"
            name="regdId"
            placeholder="Registration ID"
            type="text"
            className={classes.input}
          />
          {formik.errors.regdId ? <div>{formik.errors.regdId}</div> : null}
          <input
            name="name"
            placeholder="Name"
            type="text"
            className={classes.input}
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name).toString()}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <input
            name="email"
            placeholder="Email"
            type="email"
            className={classes.input}
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email).toString()}
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
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            className={classes.input}
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword).toString()}
          />
          {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
          <input
            name="semester"
            placeholder="Semester"
            type="text"
            className={classes.input}
            id="semester"
            value={formik.values.semester}
            onChange={formik.handleChange}
            error={formik.touched.semester && Boolean(formik.errors.semester).toString()}
          />
          {formik.errors.semester ? <div>{formik.errors.semester}</div> : null}
          <Button onClick={()=>setToggleCrSignUp(false)} type="submit" className={classes.button} color="secondary" variant="contained">
            Sign up
          </Button>
          <Button onClick={()=>setToggleCrSignUp(true)} type="submit" className={classes.button} color="secondary" variant="contained">
            Sign up as cr
          </Button>
        </form>
      </Card>
    </Modal>
  )
}

export default SignUpModal;
