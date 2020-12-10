import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import SubjectCard from './SubjectCard';

const useStyles = makeStyles(theme => ({
  
}))

const CardGrid = (props) => {
  const classes = useStyles(props);

  const classCard = () => props.subjects.map(subject => {
    if (subject.subjectType === 'regular') {
      return (
        <Grid item xs={12} sm={3} key={subject.name}>
          <SubjectCard data={{name:subject.name,bg:subject.backgroundImage,bunked:subject.classesBunked,totalClass:subject.totalClasses,semester:subject.semester}}/>
        </Grid>
      )
    } else return null;
  });

  const labCard = () => props.subjects.map(subject => {
    if (subject.subjectType === 'lab') {
      return (
        <Grid item xs={12} sm={3} key={subject.name}>
          <SubjectCard data={{name:subject.name,bg:subject.backgroundImage,bunked:subject.classesBunked,totalClass:subject.totalClasses,semester:subject.semester}}/>
        </Grid>
      )
    } else return null;
  });

  return (
    <React.Fragment>
        <Typography variant="h2">CLASSES</Typography>
        <Grid container spacing={3}>
          {classCard()}
        </Grid>
      {labCard() ? <React.Fragment>
        <Typography variant="h2">LABS</Typography>
          <Grid container spacing={3}>
              {labCard()}
          </Grid>
        </React.Fragment>:null}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {subjects:state.subject.subjects}
};

export default connect(mapStateToProps,null)(CardGrid);
