import React from 'react';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import svgImg from '../../assets/svg/undraw_book_lover_mkck.svg';
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';




import AuthenticationCard from '../UI/AuthenticationCard';
import { connect } from 'react-redux';


const styles = theme => ({
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
});


class LoginPage extends React.Component {


  render() {
    const {classes}=this.props
    return (
      <React.Fragment>
        <Grid container className={classes.containerGrid}>
                <Grid item xs={12} sm={12} md={8}>
                  <img src={svgImg} alt="svgimage" className={classes.svgImg} />
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={12} md={4}>
                  <AuthenticationCard />
                </Grid>
              </Grid>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return { authenticated: state.auth.isAuthenticated };
};
 
export default withStyles(styles)(connect(mapStateToProps,null)(LoginPage));