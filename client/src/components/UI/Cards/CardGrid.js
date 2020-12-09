import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import SubjectCard from './SubjectCard';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: "2rem",
    [theme.breakpoints.down('sm')]: {
      paddingBottom: "5rem",
    }
  },
}))

const CardGrid = (props) => {
  const classes = useStyles(props);

  const card = () => props.subjects.map(subject => {
    return (
      <Grid item xs={12} sm={3} key={subject.name }>
        <SubjectCard name={subject.name} />
      </Grid>
      
    )
  });

  return (
    <React.Fragment>{console.log(props.subjects)}
      <Container className={classes.container}>
        <Grid container spacing={3}>
          {card()}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {subjects:state.subject.subjects}
};

export default connect(mapStateToProps,null)(CardGrid);
