import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CardGrid from '../UI/Cards/CardGrid';
import { labCard, classCard } from '../../utils/cardUtil';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

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
    </motion.div>
  )
}

const mapStateToProps = (state) => {
  return {subjects:Object.values(state.subject.subjects)}
}

export default connect(mapStateToProps)(SubjectPage);
