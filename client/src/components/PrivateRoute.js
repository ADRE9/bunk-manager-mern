import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      
      transition: {
        delay:0.5,
        duration:0.5
      }
    },
    exit: {
      x: "-100vw",
      transition:{ease:"easeInOut"}
    }
  }
  
  return (
    <Route {...rest} exact render={(props) => {
      return isAuthenticated ? (
        <React.Fragment>
          {children}
        </React.Fragment>
      ) : <motion.div variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
          <Redirect to={{
          pathname: "/auth",
          state:{from:props.location}
          }}/>
        </motion.div>
    }}/> 
  )
}
const mapStateToProps = (state) => {
  return {isAuthenticated:state.auth.isAuthenticated}
}

export default connect(mapStateToProps)(PrivateRoute)
//state:{from:location}