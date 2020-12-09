import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../UI/Cards/CardGrid';
import SubjectCard from '../UI/Cards/SubjectCard';

const useStyles = makeStyles(theme => ({
  page: {
    flexGrow: 1,
  },
}))

const HomePage = (props) => {

  const classes = useStyles(props);

  const redirecting = () => {
    
    if (props.auth) {
      return (
        <div className={classes.page}>
          <CardGrid className={classes.pageGrid}>
            <SubjectCard />
            <SubjectCard/>
          </CardGrid>
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