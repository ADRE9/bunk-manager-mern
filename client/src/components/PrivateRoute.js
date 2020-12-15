import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthenticated,children, ...rest }) => {
  return (<React.Fragment><Route {...rest} render={({location}) => { return isAuthenticated ? children : <Redirect to={{pathname:"/auth",state:{from:location} }}/>}
    }/></React.Fragment>
  )
};

const mapStateToProps = (state) => {
  return {isAuthenticated:state.auth.isAuthenticated}
};

export default connect(mapStateToProps)(PrivateRoute);