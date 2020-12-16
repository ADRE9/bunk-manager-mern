import React from 'react';
import * as Yup from 'yup';
import {makeStyles} from '@material-ui/core/styles'
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  ...theme.authForm,
  formDiv: {
    width: "100%",
    flexGrow: 1,
    padding:"3rem 0"
  },
  field: {
    marginBottom:"2rem",
    width:"80%"
  },
  formControl: {
    width: "80%",
    
  }
}));

const UpdateForm = () => {

  const classes = useStyles();

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          days: [],
          semester: "",
          subjectType:"regular"
        }}
        validationSchema={Yup.object({
          name: Yup.string('Enter Subject Name').required('Name of Subject is required'),
          days: Yup.array().of(Yup.string()).required('Atleast One day is required to be selected'),
          semester: Yup.number().required('Semester is required'),
          subjectType:Yup.string('Enter Subject Type').required('Type of Subject is required')
        })}

        onSubmit={async (data) => {
          return 0;
        }}
      >
        {formik => (
          <form className={classes.formDiv}>
            <TextField
              name="name"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              className={classes.field}
              id="name" label="Subject Name" variant="outlined"
            />
            <FormControl component="fieldset" className={classes.formControl}
            >
              <FormLabel component="legend">
                  Scheduled Days
              </FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox  onChange={formik.handleChange} name="Monday" />}
                  label="Monday" />
                <FormControlLabel control={<Checkbox onChange={formik.handleChange} name="Tuesday" />}
                  label="Tuesday" />
                <FormControlLabel control={<Checkbox onChange={formik.handleChange} name="Wednesday" />}
                  label="Wednesday" />
                <FormControlLabel control={<Checkbox onChange={formik.handleChange} name="Thursday" />}
                  label="Thursday" />
                <FormControlLabel control={<Checkbox onChange={formik.handleChange} name="Friday" />}
                  label="Friday" />
                <FormControlLabel control={<Checkbox onChange={formik.handleChange} name="Saturday" />}
                label="Saturday"/>
              </FormGroup>
            </FormControl>
            <TextField 
              id="semester"
              name="semester"
              label="Semester"
              type="text"
              value={formik.values.semester}
              onChange={formik.handleChange}
              error={formik.touched.semester && Boolean(formik.errors.semester)}
              helperText={formik.touched.semester && formik.errors.password}
              className={classes.field}
              variant="outlined"
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Subject Type</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="subjectType" name="subjectType"
                value={formik.values.subjectType}
                onChange={formik.handleChange}
                label="Subject Type"
              >
                <MenuItem value="Regular">Regular</MenuItem>
                <MenuItem value="Lab">Lab</MenuItem>
              </Select>
            </FormControl>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UpdateForm
