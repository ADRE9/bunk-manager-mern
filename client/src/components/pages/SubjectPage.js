import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import { useLocation, Redirect } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
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
  },
  fab: {
    position: "fixed",
    zIndex: 4,
    top:"auto",
    bottom: "10%",
    left:"80%"
  }
}));


const SubjectPage = (props) => {
  const classes = useStyles();
  const state = useLocation();
  
      if (props.isAuthenticated) { 
        return <Redirect to={state?state.from:"/home" }/>
      }

  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        <Fab component={Link} to="/subject/new" color="secondary" className={classes.fab}>
          <AddIcon/>
        </Fab>
        {classCard(props) ? <Typography variant="h2">CLASSES</Typography> : null}
        <CardGrid className={classes.pageGrid} >
          {classCard(props)}
        </CardGrid>
        {labCard(props) ? <Typography variant="h2">LABS</Typography> : null}
        <CardGrid className={classes.pageGrid} >
          {labCard(props)}
        </CardGrid>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {subjects:Object.values(state.subject.subjects)}
}

export default connect(mapStateToProps)(SubjectPage);
