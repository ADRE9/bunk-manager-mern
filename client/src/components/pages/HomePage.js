import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  {checkAuthentication}  from '../../actions';
const HomePage = (props) => {
  
  const redirecting = () => {
    
    if (props.auth) {
      return (
        <div>
          Homeeee
        </div>
      )
    } else {
      return <Redirect to="/auth"/>
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
 
export default connect(mapStateToProps, { checkAuthentication })(HomePage);