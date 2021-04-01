import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import svgImg from '../../assets/svg/undraw_book_lover_mkck.svg';
import svgImgDark from '../../assets/svg/book_lover_dark.svg';
import { makeStyles } from '@material-ui/core/styles';
import AuthenticationCard from '../UI/AuthenticationCard';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { DarkThemeContext } from '../../providers/DarkThemeProvider';


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
  const { darkMode } = useContext(DarkThemeContext);
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
        <motion.div variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.container}
      >
              <Grid container className={classes.containerGrid}>
                <Grid item xs={12} sm={12} md={8}>
                {darkMode ? <img src={svgImgDark} alt="svgimage" className={classes.svgImg} /> : <img src={svgImg} alt="svgimage" className={classes.svgImg} />}
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={12} md={4}>
                  <AuthenticationCard/>
                </Grid>
              </Grid>
        </motion.div>
    );
  
};

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};
 
export default connect(mapStateToProps,null)(LoginPage);