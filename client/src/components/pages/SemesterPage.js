import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../UI/Cards/CardGrid';
import { labCard, classCard } from '../../utils/cardUtil';
import { useLocation, Redirect } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  ...theme.pages,
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    }
  }
}));

const SemesterPage = (props) => {
  const classes = useStyles();
  const state = useLocation();
  
      if (props.isAuthenticated) { 
        return <Redirect to={state?state.from:"/home" }/>
      }
  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        Semester Page
      </Container>
    </div>
  )
}

export default SemesterPage
