import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../UI/Cards/CardGrid';
import { labCard, classCard } from '../../utils/cardUtil';
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


const SubjectPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        Subject Page
      </Container>
    </div>
  )
}

export default connect()(SubjectPage);
