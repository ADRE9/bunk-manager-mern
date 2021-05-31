import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  ...theme.pages,
    vector:{
        position: "absolute",
        width: "665px",
        height: "513px",
        left: "-261px",
        top: "95.31%",
        background:{...theme.palette.secondary.dark}
    }
    

}));

const Bottom = (props) => {
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
      className={classes.pages}
    >
            <svg width="404" height="145" viewBox="0 0 404 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={classes.vector} fill-rule="evenodd" clip-rule="evenodd" d="M111.036 34.9067C167.435 45.7923 221.19 57.9992 269.102 83.1861C318.189 108.991 366.377 138.177 388.086 180.55C410.554 224.406 407.541 273.309 389.586 318.361C371.373 364.061 333.282 402.012 287.008 434.167C235.631 469.867 180.097 506.141 111.036 511.917C38.0295 518.023 -34.6768 497.716 -95.3715 466.147C-157.425 433.87 -203.749 387.528 -230.875 334.077C-259.217 278.228 -271.048 217.374 -251.006 159.468C-230.206 99.37 -192.404 33.9781 -118.17 8.43762C-45.9551 -16.4078 34.2433 20.0847 111.036 34.9067Z" fill="#A6B1E1"/>
            </svg>

     
    </motion.div>
  );
};



export default Bottom;
