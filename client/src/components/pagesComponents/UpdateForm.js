import React from 'react';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'
import { Formik,Field,Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useField } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { at } from 'lodash';

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
    
  },
  checkBoxDiv: {
    marginBottom:"2rem",
  },
  checkBox: {
    
  }
}));

const UpdateForm = (props) => {

  const classes = useStyles();

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
          days: Yup.array().required('Atleast One day is required to be selected'),
          semester: Yup.number().required('Semester is required'),
          subjectType:Yup.string('Enter Subject Type').required('Type of Subject is required')
        })}

        onSubmit={(data) => {
          alert(JSON.stringify(data, null, 2));
        }}
      >
        {formik => (
          <Form className={classes.formDiv}>
            <TextField
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              className={classes.field}
              id="name" label="Subject Name" variant="outlined"
            />{console.log(formik)}
            <Typography variant="h6">Days</Typography>
            <div className={classes.checkBoxDiv}>
              <label>
                <Field type="checkbox" name="days" value="Monday" />
                Monday
              </label>
              <label>
                <Field type="checkbox" name="days" value="Tuesday" />
                Tuesday
              </label>
              <label>
                <Field type="checkbox" name="days" value="Wednesday" />
                Wednesday
              </label>
              <label>
                <Field type="checkbox" name="days" value="Thursday" />
                Thursday
              </label>
              <label>
                <Field type="checkbox" name="days" value="Friday" />
                Friday
              </label>
              <label>
                <Field  color="secondary" type="checkbox" name="days" value="Saturday" />
                Saturday
              </label>
            </div>
            <TextField 
              id="semester"
              name="semester"
              label="Semester"
              type="text"
              value={formik.values.semester}
              onChange={formik.handleChange}
              error={formik.touched.semester && Boolean(formik.errors.semester)}
              helperText={formik.touched.semester && formik.errors.semester}
              className={classes.field}
              variant="outlined"
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Subject Type</InputLabel>
              <Select
                id="subjectType" name="subjectType"
                value={formik.values.subjectType}
                onChange={formik.handleChange}
                label="Subject Type"
              >
                <MenuItem value="" default disabled>None</MenuItem>
                <MenuItem value="regular">Regular</MenuItem>
                <MenuItem value="lab">Lab</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default UpdateForm
