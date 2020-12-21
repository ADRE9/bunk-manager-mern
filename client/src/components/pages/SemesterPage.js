import React,{useState} from 'react'
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
import ConfirmDialog from '../UI/ConfirmDialog';

const useStyles = makeStyles(theme => ({
  ...theme.pages,
  container: {
    height:"100vh",
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


  const [confirmOpen, setConfirmOpen] = useState(false);

  const addSemester = () => {
    props.createNewSemester();
  }

  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        Semester Page
        <Fab onClick={()=>setConfirmOpen(true)} color="secondary" className={classes.fab}>
          <AddIcon/>
        </Fab>
        <ConfirmDialog
              title="Add Semester?"
              open={confirmOpen}
              setOpen={setConfirmOpen}
              onConfirm={addSemester}
        >
          Note:Adding New Semester will make Current Semester Subjects inactive(i.e attendance will no more be added automatically)
              Are you sure you want to add a new semester?
          </ConfirmDialog>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {semester:Object.values(state.subject.semester)}
}

export default connect(mapStateToProps, {
  createNewSemester
})(SemesterPage)
