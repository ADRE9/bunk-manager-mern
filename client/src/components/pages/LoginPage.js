import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import LoginCard from '../UI/LoginCard';

//image
import illustration from '../../assets/svg/illustration.svg';

const useStyles = makeStyles(theme => ({
  Box: {
    display: "flex",
    flexDirection:"column",
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
  },
  Paper: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
  },
  Grid: {
    flexGrow:1,
  },
  illustration: {
    display:"block",
    maxWidth: "80%",
    height: "auto",
    marginTop:"2rem",
    marginLeft:"10%"
    
  }
}));


const LoginPage = (props) => {

  const classes = useStyles(props);

  return ( 
    <Box className={classes.Box}>
      <Paper className={classes.Paper}>
        <Grid container className={classes.Grid}>
          <Grid item xs={12} md={6}>
            <img  className={ classes.illustration} src={illustration} alt="illustration"/>
          </Grid>
          <Grid item align="center" xs={12} md={6}>
            <LoginCard/>
          </Grid>
        </Grid>
      </Paper>
    </Box>
   );
}
 
export default LoginPage;