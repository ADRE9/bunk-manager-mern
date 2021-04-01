import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {  FormControl, TextField, Button } from '@material-ui/core';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const MyTextField = withStyles({            //textField type 1    
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& input:valid + fieldset': {
        borderColor: 'white',
        borderWidth: 3,
        color: "white"
      },
    },
  },
})(TextField);

const MyTextField2 = withStyles({         //textField type2
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
  },
})(TextField);


const useStyles = makeStyles(theme => ({   //classes of tages below used
  AppBar: {

    top: 'auto',
    bottom: 0,

    display: 'flex',
    justifyContent: "center",
    padding: 0,

    height: "auto",

    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    }
  },

  test: {

    textAlign: 'center',
    position: "sticky",
    left: 0,
    bottom: 0,
    right: 0,
    marginTop: 'auto'

  },


  upperField: {
    display: "grid",
    gap: " 1rem",
    gridAutoFlow: "column",
    margin: "0% 5% 5% 5%",
    textAlign: "center",
    marginBottom: "1%"

  },
  margin: {
    width: "100%",
    borderWidth: "2px",

  },
  input: {
    color: 'white',
    fontSize: "1rem",
  },
  inputLable: {
    color: 'white',
  },
  input2: {
    color: 'white',
    fontSize: '1.5rem'

  },

  icon: {
    "&:hover ": {
      color: 'white',
      opacity: '0.5'
    }
  }


}));
export default function Footer() {
  const classes = useStyles();

  //state / hooks to handle the values ...
  const [nameVal, updateName] = useState("");
  const [emailVal, updateEmail] = useState("");
  const [phoneVal, updatePhone] = useState("");
  const [messageVal, updateMessage] = useState("");



  function handleSend(event) {

    //  Here sir you have all data which hasbeen updated in forms you can send it anywhere when send button clicked.
    // nameVal , emailVal , phoneVal, messageVal

    alert(nameVal + " " + emailVal + " " + phoneVal + " " + messageVal);


  }





  return (
    <React.Fragment>

      <AppBar color="secondary" className={classes.test}>
        <h1 style={{fontFamily:"Arial, sans-serif",fontSize:"300%",marginBottom:"0%"}}>Get In Touch With Bunk Manager</h1>
        <h2 style={{fontFamily:"cursive",marginTop:"0%"}}>We love feedback.Fill out form below and we'll get back to you as soon as possible.</h2>
        <FormControl style={{ textAlign: "center", margin: "5%" ,marginBottom:"1%",marginTop:"1%" }}>
          <div className={classes.upperField}>
            <div> <MyTextField className={classes.margin}
              InputProps={{ className: classes.input, }}
              InputLabelProps={{ className: classes.inputLable }}
    
              onChange={(event)=>{updateName(event.target.value)}}
              label="Name"
              Type="text"
              variant="outlined"
              id="custom-css-outlined-input"
            />
            </div>
            <div> <MyTextField className={classes.margin}
              InputProps={{ className: classes.input, }}
              InputLabelProps={{ className: classes.inputLable }}
              onChange={(event)=>{updateEmail(event.target.value)}}
              label="Email"
              type="Email"
              variant="outlined"
              id="custom-css-outlined-input"
            />
            </div>
            <div> <MyTextField className={classes.margin}
              InputProps={{ className: classes.input, }}
              InputLabelProps={{ className: classes.inputLable }}
              onChange={(event)=>{updatePhone(event.target.value)}}
              label="Phone"
              type="Number"
              variant="outlined"
              id="custom-css-outlined-input"
            />
            </div>

          </div>
          <div> <MyTextField2
            style={{ width: "90%" }}
            multiline rows={8}
            InputProps={{ className: classes.input2, }}
            InputLabelProps={{ className: classes.inputLable }}
            onChange={(event)=>{updateMessage(event.target.value)}}
            label="Message"
            variant="filled" />

          </div>
          <Button variant="contained" color="primary" onClick={handleSend} style={{ width: "90%", left: "5%", right: "5%", marginTop: "1%" }}>
            Send
           </Button>
          <div style={{ margin: "1% 1% 0% 1%" }}>
            <a href="https://github.com/ASHISH-GITHUB2495/GRIP_BasicBankingSystem_2021" target="_blank">
              < GitHubIcon className={classes.icon} color="primary" style={{ height: "4%", width: "4%", }} /></a>
            <a href="https://ashish-github2495.github.io/MyPortfolio.github.io/" target="_blank">
              < FacebookIcon className={classes.icon} color="primary" style={{ height: "4%", width: "4%" }} /></a>
            <a href="https://www.stopstalk.com/user/profile/ZeroHu0" target="_blank">
              < TwitterIcon className={classes.icon} color="primary" style={{ height: "4%", width: "4%" }} /> </a>
            <a href="https://www.linkedin.com/in/ashish2495/" target="_blank">
              < LinkedInIcon className={classes.icon} color="primary" style={{ height: "4%", width: "4%" }} /> </a>

          </div>
        </FormControl>






      </AppBar>

    </React.Fragment>

  )
}