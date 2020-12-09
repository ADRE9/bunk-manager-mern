import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../UI/Cards/CardGrid';
import SubjectCard from '../UI/Cards/SubjectCard';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  page: {
    //backgroundColor:"black",
    flexGrow: 1,
    minHeight:"90vh",
    marginTop: "0rem",
    display: "flex",
    flexDirection:"column"
  },
  container: {
    flexGrow:1,
    paddingTop: "2rem",
    [theme.breakpoints.down('sm')]: {
      paddingBottom: "5rem",
    }
  },
}))

const HomePage = (props) => {

  const classes = useStyles(props);

  const redirecting = () => {
    
    if (props.auth) {
      return (
        <div className={classes.page}>
          <Container className={classes.container}>
            <CardGrid className={classes.pageGrid} />
          </Container>
        </div>
      )
    } else {
      return <Redirect to="/"/>
    }
  }
  
  return (
    <div>
        {redirecting()}
    </div>
    
  )
};

const mapStateToProps = (state) => {
  return {auth:state.auth.isAuthenticated}
};
 
export default connect(mapStateToProps,null)(HomePage);