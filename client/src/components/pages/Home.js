import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Calendar from '../../assets/svg/Home-Light.png'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Bottom from '../pagesComponents/bottom'
import Navbar from '../pagesComponents/navbar'
import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  ...theme.pages,
    hmLight:{
        //position: "relative",
        width: "1440px",
        height: "1024px",

        //background: "#FFFFFF"
    },
    group20:{
        position: "absolute",
        width: "1000px",
        height: "1500px",
        left: "743px",
        top: "-150px"
    },
    group10:{
        position: "absolute",
        width: "704px",
        height: "385px",
        left: "81px",
        top: "354px"
    },
    manage:{
        position: "absolute",
        width: "513px",
        height: "142px",
        left: "81px",
        top: "120px",

        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "36px",
        lineHeight: "46px",

        color: "#5C5470"
    },
    bunk:{
        position: "absolute",
        width: "704px",
        height: "66px",
        left: "81px",
        //top: "200px",

        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "66px",
        lineHeight: "84px",

        color: "#352F44"
    },
    group9:{
        position: "absolute",
        width: "253px",
        height: "63px",
        left: "81px",
        top: "676px"
    },
    explore:{
        position: "absolute",
        width: "79px",
        height: "23px",
        left: "100px",
        top: "18px",

        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "23px",
        color: "#424874"

    },
    rectangle:{
        position: "absolute",
        width: "253px",
        height: "63px",
        left: "81px",
        top: "250px",

        background: "#F4EEFF",
        borderRadius: "31.5px"
    },
    vector:{
      position: "absolute",
      width: "665px",
      height: "513px",
      left: "-50px",
      top:"879px",
      //background:{...theme.palette.secondary.dark}
  },
  toggle:{
    position: "absolute",
    left: "94.1%",
    right: "4.38%",
    top: "95.31%",
    bottom: "2.93%",

    //background: "#2A2438"
      }
}));

const Home = (props) => {
  const classes = useStyles();
  
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.page}
    >       
            <Container className={classes.hmLight}>
            <Navbar/>
                
                <Box className={classes.group10}>
                    <Container className={classes.group9,classes.rectangle}>
                        <div className={classes.explore} >Explore</div>
                    </Container>
                    <Typography className={classes.bunk}>
                    Bunking Made Easy 

                    </Typography>
                    <Typography className={classes.manage}>
                    Manage your daily attendance easily with us.Let’s get started!!
                    </Typography>
                </Box>
                
                    <img className={classes.group20} src={Calendar}/>
                

                    <svg className={classes.vector} width="404" height="145" viewBox="0 0 404 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  fill-rule="evenodd" clip-rule="evenodd" d="M111.036 34.9067C167.435 45.7923 221.19 57.9992 269.102 83.1861C318.189 108.991 366.377 138.177 388.086 180.55C410.554 224.406 407.541 273.309 389.586 318.361C371.373 364.061 333.282 402.012 287.008 434.167C235.631 469.867 180.097 506.141 111.036 511.917C38.0295 518.023 -34.6768 497.716 -95.3715 466.147C-157.425 433.87 -203.749 387.528 -230.875 334.077C-259.217 278.228 -271.048 217.374 -251.006 159.468C-230.206 99.37 -192.404 33.9781 -118.17 8.43762C-45.9551 -16.4078 34.2433 20.0847 111.036 34.9067Z" fill="#A6B1E1"/>
                    </svg>
                    <svg className={classes.toggle} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M14.6667 0H7.33333C3.28323 0 0 4.02943 0 9.00001C0 13.9706 3.28323 18 7.33333 18H14.6667C18.7168 18 22 13.9706 22 9.00001C22 4.02943 18.7168 0 14.6667 0ZM2.44444 9.00001C2.44444 5.68402 4.63104 3 7.33333 3C10.0352 3 12.2222 5.68355 12.2222 9.00001C12.2222 12.316 10.0356 15 7.33333 15C4.63142 15 2.44444 12.3165 2.44444 9.00001ZM14.6667 15H12.7988C15.2897 11.5848 15.2904 6.41626 12.7988 3H14.6667C17.3686 3 19.5556 5.68355 19.5556 9.00001C19.5556 12.3159 17.369 15 14.6667 15Z" fill="#2A2438"/>
                    </svg>

            </Container>
    </motion.div>
  );
};



export default Home;
