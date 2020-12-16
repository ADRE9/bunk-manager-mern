import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

const FormPage = (props) => {

  const classes = useStyles(props);

  const renderHeading = () => {
    if (window.location.pathname === "/subject/new") {
      return(<Typography variant="h3">ADD NEW SUBJECT</Typography>)
    }
  }
  
  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        {renderHeading()}
        <UpdateForm/>
      </Container>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {auth:state.auth.isAuthenticated,subjects:Object.values(state.subject.subjects)}
};
 
export default connect(mapStateToProps,null)(FormPage);