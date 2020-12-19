import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  updateSubject } from '../../actions/subjectActions';
import { withRouter } from 'react-router-dom';
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

const EditSubjectPage = (props) => {

  const classes = useStyles(props);

  const editSubject = (data) => {
    const id = props.match.params.id;
    console.log(id)
    props.updateSubject(data,id); 
  }
  
  return (
    <div className={classes.page}>{console.log(props)}
      <Container className={classes.container}>
        <Typography variant="h3">EDIT SUBJECT</Typography>
        <UpdateForm subjectMethod={(data)=>editSubject(data)}/>
      </Container>
    </div>
  )
};
 
export default withRouter(connect(null, {
  updateSubject
})(EditSubjectPage));