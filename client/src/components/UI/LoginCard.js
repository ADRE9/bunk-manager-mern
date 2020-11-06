import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop:"2rem",
    width: "90%",
    height:"80vh",
  },
}));

const LoginCard = (props) => {

  const classes = useStyles(props);

  return ( 
    <Card className={classes.container}>
      
    </Card>
   );
}
 
export default LoginCard;