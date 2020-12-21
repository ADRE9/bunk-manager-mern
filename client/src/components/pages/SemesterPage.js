import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../UI/Cards/CardGrid';
import { labCard, classCard } from '../../utils/cardUtil';
import Fab from '@material-ui/core/Fab';
import { createNewSemester } from '../../actions/subjectActions';
import { Redirect } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  ...theme.pages,
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    }
  },
  fab: {
    position: "fixed",
    zIndex: 4,
    top:"auto",
    bottom: "10%",
    left:"80%"
  }
}));

const SemesterPage = (props) => {
  const classes = useStyles();

  const onFabClick = () => {
    props.createNewSemester();
  }

  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        Semester Page
        <Fab onClick={()=>onFabClick()} color="secondary" className={classes.fab}>
          <AddIcon/>
        </Fab>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {auth:state.auth.user}
}

export default connect(mapStateToProps, {
  createNewSemester
})(SemesterPage)
