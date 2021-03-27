import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Twitter, Facebook, GitHub, Linkedin } from 'react-feather';
import { Box } from '@material-ui/core';
import { DarkThemeContext } from '../../providers/DarkThemeProvider';

const useStyles = makeStyles(theme => ({
  AppBar: {

    top: 'auto',
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    height: "4rem",

    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    }
  },

  test: {


    position: "sticky",
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: 'auto'

  },

  logo: {
    fontWeight: 400,
    fontSize: "1.5rem",
    fontFamily: "Lobster, cursive",
    color: "white",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginTop: 0,
    }


  },



}));
export default function Footer() {
  const classes = useStyles();
  const { darkMode } = useContext(DarkThemeContext);

  return (
    <React.Fragment>

      <AppBar color="secondary" className={classes.test}>
        <Toolbar >
          <Typography className={classes.logo}>
            BUNK MANAGER
               </Typography>
          <Box display="flex"
            width={500} height={80}
            paddingLeft={40}
            alignItems="center"
            justifyContent="center">
            <Typography variant="h7">Contact:</Typography>

            <Box paddingLeft={1}><a href="#"><Twitter color={darkMode ? '#1B1B1B' : '#fff'} /></a> <a href="#"><Facebook color={darkMode ? '#1B1B1B' : '#fff'} /></a>
              <a href="#"><GitHub color={darkMode ? '#1B1B1B' : '#fff'} /></a> <a href="#"> <Linkedin color={darkMode ? '#1B1B1B' : '#fff'} /></a>
            </Box>
          </Box>

        </Toolbar>
      </AppBar>

    </React.Fragment>

  )
}