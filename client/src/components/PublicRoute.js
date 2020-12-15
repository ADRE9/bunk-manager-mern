import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ isAuthenticated,children, ...rest }) => {
  return (<React.Fragment><Route {...rest} render={() => {return !isAuthenticated ? children:<Redirect to="/"/>}
    }/></React.Fragment>
  )
};

const mapStateToProps = (state) => {
  return {isAuthenticated:state.auth.isAuthenticated}
};

export default connect(mapStateToProps)(PublicRoute);