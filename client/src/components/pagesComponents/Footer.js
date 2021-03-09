import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Twitter,Facebook,GitHub,Linkedin } from 'react-feather';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    AppBar: {
        
        top: 'auto',
        bottom: 0,
        display: "flex",
        justifyContent:"center",
        padding: 0,
        margin:0,
        height: "4rem",
        
        [theme.breakpoints.down("sm")]: {
            height: "3rem",
    }},
    
    test: {
      
      
      position:"sticky",
  left:0,
  bottom:0,
  right:0,
  marginTop:'auto'
   
    },
    
    logo: {
      fontWeight: 400,
      fontSize:"1.5rem",
      fontFamily: "Lobster, cursive",
      color: "white",
      
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        marginTop:0,
      }
               
    
    }  , 
    
   
    
}));
export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
          
          <AppBar color="secondary" className={classes.test}>
            <Toolbar >
              <Typography className={classes.logo}>
                BUNK MANAGER  
               </Typography>
              <Box  display="flex" 
                width={500} height={80} 
                paddingLeft={40}
                alignItems="center"
                justifyContent="center"> 
                <Typography variant="h7">Contact:</Typography>
        
                <Box paddingLeft={1}><a href="#"><Twitter /></a> <a href="#"><Facebook /></a>
                  <a href="#"><GitHub /></a> <a href="#"> <Linkedin /></a>
                </Box>
              </Box>
        
            </Toolbar>
          </AppBar>
      
        </React.Fragment>
        
    )
}