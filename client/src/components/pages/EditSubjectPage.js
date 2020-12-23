import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  updateSubject } from '../../actions/subjectActions';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import UpdateForm from '../pagesComponents/UpdateForm';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: {
      opacity: 0,
      x:100
    },
    visible: {
      opacity: 1,
      x:0,
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
  
  return (
    <motion.div variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit" className={classes.page}>
      <Container className={classes.container}>
        <Typography variant="h3">EDIT SUBJECT</Typography>
        <UpdateForm subjectMethod={(data)=>editSubject(data)}/>
      </Container>
    </motion.div>
  )
};
 
export default withRouter(connect(null, {
  updateSubject
})(EditSubjectPage));