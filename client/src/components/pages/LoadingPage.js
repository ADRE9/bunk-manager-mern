import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  fullpage: {
    width: "100vw",
    height: "100vh",
    display:"flex",
    alignItems: "center",
    justifyContent:"center"
  }
}))

const LoadingPage = (props) => {
  const classes=useStyles(props)
  return (
    <div className={classes.fullpage}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default LoadingPage;
