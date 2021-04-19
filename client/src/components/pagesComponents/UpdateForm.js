import React from "react";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import TextField from "@material-ui/core/TextField";
//import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { Redirect, Link, withRouter } from "react-router-dom";
import { clearEvents } from "../../actions/subjectActions";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
//import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { setOpen } from "../../actions/subjectActions";

const useStyles = makeStyles((theme) => ({
  ...theme.authForm,
  formPage: {
    display: "flex",
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexGrow: 1,
    padding: "3rem 0",
  },
  field: {
    marginBottom: "1rem",
    marginTop: "0.5rem",
    width: "80%",
  },
  formControl: {
    width: "80%",
    marginBottom: "2rem",
  },
  checkBoxDiv: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
  },
  checkBox: {},
  buttonAdd: {
    width: "20%",
    borderRadius: "10px",
    marginRight: "3rem",
  },
  buttonCancel: {
    width: "20%",
    borderRadius: "10px",
    marginLeft: "-2.2rem",
  },
  dialog: {
    width: "100vw",
  },
  title: {
    font: "normal normal normal 2.9vh/3.32vh arial",
    marginTop: "1.07vh",
    borderBottom: "1px solid #1A262F",
  },
  subNameHead: {
    marginTop: "-2.5rem",
  },
  subTypeHead: {
    marginBottom: "1rem",
  },
}));

const UpdateForm = (props) => {
  const classes = useStyles();

  const decideInitialValues = () => {
    if (props.match.params.id) {
      const id = props.match.params.id;
      const { subjectState } = props;
      return {
        name: subjectState.subjects[id].name,
        days: subjectState.subjects[id].days,
        subjectType: subjectState.subjects[id].subjectType,
      };
    } else {
      return {
        name: "",
        days: [],
        subjectType: "regular",
      };
    }
  };

  const checkDay = (days, day) => { // function to check if a day in present in days array
    if(days.includes(day))
      return true;
    return null;
  }

  if (props.subjectState.hasBeenUpdated||props.subjectState.hasBeenCreated) {
    props.clearEvents();
    return <Redirect to="/subject" />;
  }

  return (
    <div className={classes.formPage}>
      <Dialog onClose={Redirect} classes={{paper: classes.dialog}} open={props.clicked} aria-labelledby="form-dialog-title">
      <DialogTitle disableTypography className={classes.title} id="form-dialog-title">{props.name}</DialogTitle>
      <DialogContent>
      <Formik
        initialValues={decideInitialValues()}
        validationSchema={Yup.object({
          name: Yup.string('Enter Subject Name').required('Name of Subject is required'),
          days: Yup.array().required('Atleast One day is required to be selected'),
          subjectType:Yup.string('Enter Subject Type').required('Type of Subject is required')
        })}

        onSubmit={(data) => {
          props.subjectMethod(data);
          props.setOpen();
        }}
      >
        {formik => (
          <Form className={classes.formDiv}>
            <Typography variant='h6' className={classes.subNameHead} color='inherit'>Subject Name</Typography>
            <TextField
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              className={classes.field}
              id="name" placeholder='Enter Subject Name' variant="outlined"
            />
            <Typography variant="h6">Days</Typography>
            <div className={classes.checkBoxDiv}>
              <label>
                <Field checked={checkDay(formik.values.days, 'monday')} type="checkbox" name="days" value="Monday" />
                Monday
              </label>
              <label>
                <Field checked={checkDay(formik.values.days, 'tuesday')} type="checkbox" name="days" value="Tuesday" />
                Tuesday
              </label>
              <label>
                <Field checked={checkDay(formik.values.days, 'wednesday')} type="checkbox" name="days" value="Wednesday" />
                Wednesday
              </label>
              <label>
                <Field checked={checkDay(formik.values.days, 'thursday')} type="checkbox" name="days" value="Thursday" />
                Thursday
              </label>
              <label>
                <Field checked={checkDay(formik.values.days, 'friday')} type="checkbox" name="days" value="Friday" />
                Friday
              </label>
              <label>
                <Field  checked={checkDay(formik.values.days, 'saturday')} color="secondary" type="checkbox" name="days" value="Saturday" />
                Saturday
              </label>
            </div>
            <Typography variant='h6' className={classes.subTypeHead} color='inherit'>Subject Type</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                id="subjectType" name="subjectType"
                value={formik.values.subjectType}
                onChange={formik.handleChange}
              >
                <MenuItem value="" default disabled>None</MenuItem>
                <MenuItem value="regular">Regular</MenuItem>
                <MenuItem value="lab">Lab</MenuItem>
              </Select>
            </FormControl>
            <div>
              <Button className={classes.buttonAdd} variant="contained" color="primary" type="submit">
                Confirm
              </Button>
              <Button onClick={() => props.setOpen()} className={classes.buttonCancel} variant="contained" color="secondary" component={Link} to="/subject" >
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    subjectState: state.subject,
    clicked: state.subject.clicked,
  };
};

export default withRouter(
  connect(mapStateToProps, { clearEvents, setOpen })(UpdateForm)
);
