import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  
  return (
    <Route {...rest} exact render={(location) => {
      return isAuthenticated ? children : <Redirect to={{
        pathname: "/auth",
        
      }}/>
    }}/> 
  )
}
const mapStateToProps = (state) => {
  return {isAuthenticated:state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(PrivateRoute)
//state:{from:location}