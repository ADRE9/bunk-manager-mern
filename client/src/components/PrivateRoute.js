import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, isAuthenticated,location, ...rest }) => {
  
  return (
    <Route {...rest} render={(location) => {
      return isAuthenticated ? children : <Redirect to={{
        pathname: "/",
        state:{from:location}
      }}/>
    }}/> 
  )
}
const mapStateToProps = (state) => {
  return {isAuthenticated:state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(PrivateRoute)
