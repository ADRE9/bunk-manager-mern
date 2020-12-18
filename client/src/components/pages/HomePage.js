import React from 'react';
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
      paddingTop:"2rem",
      paddingBottom: "2rem",
    }
  }
}))

const HomePage = (props) => {

  const classes = useStyles(props);
  
  return (
    <div className={classes.page}>
      <Container className={classes.container}>
        {classCard(props)?<Typography variant="h2">CLASSES</Typography>:null}
        <CardGrid className={classes.pageGrid} >
          {classCard(props)}
        </CardGrid>
        {labCard(props)?<Typography variant="h2">LABS</Typography>:null}
        <CardGrid>
          {labCard(props)}
        </CardGrid>
      </Container>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {auth:state.auth.isAuthenticated,subjects:Object.values(state.subject.subjects)}
};
 
export default connect(mapStateToProps,null)(HomePage);