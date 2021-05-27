import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Bottom from './bottom'
import { motion } from 'framer-motion';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    
    group12:{
        position: "absolute",
        width: "1296px",
        height: "74px",
        left: "81px",
        //top: "49px"
    },
    group1:{
        position: "absolute",
        width: "164px",
        height: "74px",
        left: "81px",
        //top: "49px",

        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        lineHeight: "37px",

        color:"#424874"
    },
    tick:{
        position:"absolute",
        left: "13.33%",
        right: "84.51%",
        top: "5.18%",
        bottom: "92.38%",

        background: "#3C4038"
    },
    group8:{
        position:"absolute",
        width: "1000px",
        height: "32px",
        //left: "483px",
        top: "58px", 
        //right:"30px"
    },
    group4:{
        position: "absolute",
        width: "245px",
        height: "30px",
        left: "670px",
        //top: "60px",
    },
    user:{
        position: "absolute",
        width: "19px",
        height: "24px",
        left: "796px",
        top: "61px",
        position: "absolute",
        marginLeft: "15px",
        right: "0%",
        top: "0%",
        bottom:"0%",

        background: "#424874"

    },
    group3:{
        position: "absolute",
        width: "109px",
        height: "30px",
        left: "670px",
        //top: "60px",

    },
    group7:{
        position: "absolute",
        width: "202px",
        height: "26.38px",
        left: "1275px",
        //top: "58px"
    },
    login:{
        position: "absolute",
        left: "94.1%",
        right: "4.38%",
        top: "6.45%",
        bottom: "91.76%",
        background: "#424874"
    },
    textt:{
        
        fontFamily: "Open Sans",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "26px",
        lineHeight: "33px",

        color: "#424874"
    },
    group6:{
        position: "absolute",
    width: "233px",
        height: "26px",
        left: "1066px",
        //top: "58px"
    },
    contact:{
        position: "absolute",
        left: "81.74%",
        right: "16.74%",
        top: "5.66%",
        bottom: "91.99%",

        background: "#424874",
    },
    group5:{
        position: "absolute",
        width: "196px",
        height: "27px",
        left: "894px",
        //top: "59px" 
    },
    faq:{
        position: "absolute",
        left: "67.36%",
        right: "31.25%",
        top: "6.05%",
        bottom: "91.7%",

        background: "#424874"
    },
    group2:{
        position: "absolute",
        width: "212px",
        height: "25px",
        left: "483px",
        color:"#A6B1E1" 
        //top: "59px"
    },
    home:{
        position: "absolute",
        left: "39.58%",
        right: "58.68%",
        top: "5.86%",
        bottom: "91.8%",

        background: "#A6B1E1"
    },
    rectangle:{
        position: "absolute",
        width: "200px",
        height: "11px",
        left: "483px",
        top: "102px",

        background:"#A6B1E1",
        borderRadius: "5.5px"
    }

}));

const Navbar = (props) => {
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
      //className={classes.page}
    >     
            <Container className={classes.group12}> 
                    <Container className={classes.group8}>
                        <Container className={classes.group4}>
                            <Typography className={classes.group3, classes.textt}>
                            AboutUs {" "} 
                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={classes.user} d="M9.5 12C12.4984 12 14.9286 9.31406 14.9286 6C14.9286 2.68594 12.4984 0 9.5 0C6.50156 0 4.07143 2.68594 4.07143 6C4.07143 9.31406 6.50156 12 9.5 12ZM13.3 13.5H12.5917C11.6502 13.9781 10.6027 14.25 9.5 14.25C8.39732 14.25 7.35402 13.9781 6.40826 13.5H5.7C2.55312 13.5 0 16.3219 0 19.8V21.75C0 22.9922 0.91183 24 2.03571 24H16.9643C18.0882 24 19 22.9922 19 21.75V19.8C19 16.3219 16.4469 13.5 13.3 13.5Z" fill="#424874"/>
                            </svg>
                            </Typography>
                            
                            
                        </Container>
                    <Container className={classes.group7}>
                        <Typography className={ classes.textt}>
                          Login {" "} 
                          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={classes.login} d="M17.875 18H14.2656C13.982 18 13.75 17.7469 13.75 17.4375V15.5625C13.75 15.2531 13.982 15 14.2656 15H17.875C18.6355 15 19.25 14.3297 19.25 13.5V4.5C19.25 3.67031 18.6355 3 17.875 3H14.2656C13.982 3 13.75 2.74688 13.75 2.4375V0.5625C13.75 0.253125 13.982 0 14.2656 0H17.875C20.1523 0 22 2.01562 22 4.5V13.5C22 15.9844 20.1523 18 17.875 18ZM15.8555 8.57812L8.63672 0.703125C7.99219 0 6.875 0.492188 6.875 1.5V6H1.03125C0.459766 6 0 6.50156 0 7.125V11.625C0 12.2484 0.459766 12.75 1.03125 12.75H6.875V17.25C6.875 18.2578 7.99219 18.75 8.63672 18.0469L15.8555 10.1719C16.2551 9.73125 16.2551 9.01875 15.8555 8.57812Z" fill="#424874"/>
                        </svg> 
                        </Typography>
                          
                    </Container>
                    <Container className={classes.group6}>
                        <Typography className={ classes.textt}>
                          Contact {" "} 
                          <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={classes.contact} d="M21.3722 16.959L16.5597 14.709C16.3541 14.6134 16.1257 14.5932 15.9087 14.6516C15.6917 14.7099 15.4979 14.8435 15.3566 15.0324L13.2254 17.873C9.88055 16.1526 7.18876 13.2161 5.61172 9.56723L8.21562 7.24223C8.38908 7.08833 8.51185 6.87697 8.56535 6.64015C8.61884 6.40332 8.60015 6.15393 8.51211 5.92973L6.44961 0.679731C6.35298 0.438048 6.18207 0.240721 5.96636 0.121777C5.75065 0.00283366 5.50366 -0.0302721 5.26797 0.0281687L0.799219 1.15317C0.571987 1.21041 0.36925 1.34999 0.224097 1.54911C0.0789444 1.74824 -5.2345e-05 1.99516 2.60228e-08 2.24957C2.60228e-08 14.273 8.9332 23.9996 19.9375 23.9996C20.1708 23.9997 20.3972 23.9136 20.5799 23.7553C20.7625 23.5969 20.8905 23.3757 20.943 23.1277L21.9742 18.2527C22.0274 17.9943 21.9965 17.7238 21.8866 17.4877C21.7767 17.2515 21.5948 17.0646 21.3722 16.959Z" fill="#424874"/>
                        </svg>
                        </Typography>
                        
  
                    </Container>
                    <Container className={classes.group5}>
                        <Typography className={ classes.textt}>
                          FAQ{" "} 
                          <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={classes.faq} d="M10.0268 0C5.49038 0 2.55215 1.46908 0.245337 4.08906C-0.173127 4.56433 -0.0441156 5.21597 0.53962 5.56582L2.9913 7.03517C3.58083 7.38848 4.41964 7.30587 4.88118 6.84883C6.3048 5.43914 7.36082 4.62749 9.58454 4.62749C11.333 4.62749 13.4956 5.5169 13.4956 6.85701C13.4956 7.87009 12.4375 8.39037 10.7112 9.15539C8.69794 10.0475 6.03382 11.1578 6.03382 13.9353V14.375C6.03382 14.9704 6.64449 15.4531 7.39782 15.4531H11.5166C12.2699 15.4531 12.8806 14.9704 12.8806 14.375V14.1157C12.8806 12.1903 20 12.1101 20 6.9C20.0001 2.97634 14.8508 0 10.0268 0ZM9.45723 16.7765C7.28643 16.7765 5.52033 18.1724 5.52033 19.8883C5.52033 21.6041 7.28643 23 9.45723 23C11.628 23 13.3941 21.6041 13.3941 19.8882C13.3941 18.1724 11.628 16.7765 9.45723 16.7765Z" fill="#424874"/>
                        </svg>
                        </Typography>
                        
                    </Container>
                    <Container className={classes.group2}>
                        <Typography className={ classes.textt} style={{color:"#A6B1E1"}}>
                          Home{" "} 
                          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path classNmae={classes.home}  d="M12.1685 6.22623L4.167 14.362V23.1428C4.167 23.3701 4.24016 23.5882 4.37038 23.7489C4.5006 23.9097 4.67722 24 4.86139 24L9.72473 23.9845C9.90829 23.9833 10.084 23.8925 10.2135 23.7319C10.343 23.5712 10.4156 23.3538 10.4156 23.1272V17.9993C10.4156 17.772 10.4888 17.5539 10.619 17.3932C10.7493 17.2324 10.9259 17.1421 11.11 17.1421H13.8876C14.0718 17.1421 14.2484 17.2324 14.3786 17.3932C14.5088 17.5539 14.582 17.772 14.582 17.9993V23.1235C14.5817 23.2363 14.5995 23.348 14.6342 23.4523C14.669 23.5567 14.7201 23.6515 14.7846 23.7314C14.8491 23.8113 14.9258 23.8746 15.0101 23.9179C15.0945 23.9611 15.185 23.9834 15.2764 23.9834L20.138 24C20.3222 24 20.4988 23.9097 20.629 23.7489C20.7592 23.5882 20.8324 23.3701 20.8324 23.1428V14.3561L12.8326 6.22623C12.7385 6.13264 12.6214 6.08161 12.5006 6.08161C12.3798 6.08161 12.2626 6.13264 12.1685 6.22623ZM24.8078 11.756L21.1796 8.06394V0.642929C21.1796 0.472414 21.1247 0.308882 21.027 0.18831C20.9294 0.0677371 20.7969 0 20.6588 0H18.2284C18.0903 0 17.9578 0.0677371 17.8602 0.18831C17.7625 0.308882 17.7076 0.472414 17.7076 0.642929V4.53318L13.8221 0.586673C13.4492 0.207869 12.9813 0.000757234 12.4984 0.000757234C12.0155 0.000757234 11.5476 0.207869 11.1747 0.586673L0.189004 11.756C0.136268 11.8098 0.0926378 11.8759 0.0606055 11.9505C0.0285733 12.0251 0.00876702 12.1068 0.00231847 12.1909C-0.00413009 12.275 0.00290544 12.3598 0.0230231 12.4406C0.0431407 12.5213 0.0759461 12.5963 0.119565 12.6614L1.22625 14.3223C1.26975 14.3876 1.32326 14.4417 1.3837 14.4814C1.44415 14.5212 1.51035 14.5458 1.57852 14.5539C1.64669 14.562 1.71548 14.5534 1.78096 14.5287C1.84645 14.5039 1.90733 14.4635 1.96013 14.4096L12.1685 4.02956C12.2626 3.93597 12.3798 3.88494 12.5006 3.88494C12.6214 3.88494 12.7385 3.93597 12.8326 4.02956L23.0414 14.4096C23.0941 14.4635 23.1549 14.504 23.2203 14.5288C23.2857 14.5537 23.3544 14.5623 23.4225 14.5544C23.4906 14.5464 23.5568 14.522 23.6173 14.4824C23.6777 14.4429 23.7313 14.389 23.7749 14.3239L24.8815 12.663C24.9251 12.5976 24.9578 12.5221 24.9777 12.4411C24.9975 12.36 25.0043 12.2748 24.9974 12.1906C24.9905 12.1063 24.9703 12.0245 24.9377 11.9499C24.9052 11.8753 24.861 11.8094 24.8078 11.756Z" fill="#A6B1E1"/>
                        </svg>
                        </Typography>
                        
                        <svg width="112" height="11" viewBox="0 0 112 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect classNme={classes.rectangle} width="112" height="11" rx="5.5" fill="#A6B1E1"/>
                        </svg>
                    </Container>
                    <Typography className={classes.group1}>
                        Bunk <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={classes.tick} d="M10.529 24.509L0.453966 13.6134C-0.151322 12.9588 -0.151322 11.8974 0.453966 11.2428L2.64595 8.8722C3.25123 8.21754 4.2327 8.21754 4.83799 8.8722L11.625 16.212L26.162 0.490942C26.7673 -0.163647 27.7488 -0.163647 28.3541 0.490942L30.546 2.86153C31.1513 3.51612 31.1513 4.57746 30.546 5.23211L12.721 24.5091C12.1157 25.1637 11.1343 25.1637 10.529 24.509Z" fill="#3C4038"/>
                            </svg>
                        Manager
                    </Typography>
                </Container>
            </Container>
            
    </motion.div>
  );
};



export default Navbar;
