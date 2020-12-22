import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthHeader from '../components/pagesComponents/AuthHeader';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  
  return (
    <Route {...rest} exact render={(props) => {
      return isAuthenticated ? (
        <React.Fragment>
          <AuthHeader />
          {children}
        </React.Fragment>
      ) : <Redirect to={{
        pathname: "/auth",
        state:{from:props.location}
      }}/>
    }}/> 
  )
}
const mapStateToProps = (state) => {
  return {isAuthenticated:state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(PrivateRoute)
//state:{from:location}