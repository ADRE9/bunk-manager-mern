import React from 'react';
import { useLocation,Redirect } from 'react-router-dom';

const AboutPage = (props) => {
  const state = useLocation();
  
      if (props.isAuthenticated) { 
        return <Redirect to={state?state.from:"/home" }/>
      }
    
  return (
    <div>
      About Page
    </div>
  )
}

export default AboutPage
