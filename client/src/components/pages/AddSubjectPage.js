import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createActiveSubject } from '../../actions/subjectActions';
import { Typography } from '@material-ui/core';
import UpdateForm from '../pagesComponents/UpdateForm';

const useStyles = makeStyles(theme => ({
  ...theme.pages,
  container: {
    display: "flex",
    flexDirection:"column",
    [theme.breakpoints.down('sm')]: {
      paddingTop:"2rem",
      paddingBottom: "2rem",
    }
  }
}))

const AddSubjectPage = (props) => {

  const classes = useStyles(props);

  const addSubject = (data) => {
      props.createActiveSubject(data); 
  }
  
  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        <Typography variant="h3">ADD NEW SUBJECT</Typography>
        <UpdateForm subjectMethod={(data)=>addSubject(data)}/>
      </Container>
    </div>
  )
};

export default connect(null, {
  createActiveSubject
})(AddSubjectPage);