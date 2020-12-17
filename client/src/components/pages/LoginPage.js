import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import svgImg from '../../assets/svg/undraw_book_lover_mkck.svg';
//import { makeStyles } from "@material-ui/core/styles";
import { useLocation,Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';




import AuthenticationCard from '../UI/AuthenticationCard';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  svgImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  containerGrid: {
    flexGrow:1,
  },
  gridItem: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin:"3rem 0rem 5rem 0rem",
    }
  }
}));


const LoginPage = (props) => {
  const classes = useStyles(props);
  const state = useLocation();
  
      if (props.isAuthenticated) { 
        return <Redirect to={state?state.from:"/home" }/>
      }
    
  
    return (
      <React.Fragment>{console.log(props.isAuthenticated)}
        <Grid container className={classes.containerGrid}>
                <Grid item xs={12} sm={12} md={8}>
                  <img src={svgImg} alt="svgimage" className={classes.svgImg} />
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={12} md={4}>
            <AuthenticationCard/>
                </Grid>
              </Grid>
      </React.Fragment>
    );
  
};

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};
 
export default connect(mapStateToProps,null)(LoginPage);