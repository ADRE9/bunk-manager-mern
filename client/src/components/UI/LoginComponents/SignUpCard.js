import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
//import FacebookIcon from '@material-ui/icons/Facebook';
import Divider from "@material-ui/core/Divider";
import google from "../../../assets/svg/google.svg";

const useStyles = makeStyles((theme) => ({
  signUpHeader: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
    marginTop: "10px",
    marginBottom: "0",
    textTransform: "uppercase",
  },
  button: {
    ...theme.authForm.button,
    width: "150px",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  oAuthDiv: {
    display: "flex",
    flexDirection: "row",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "20%",
    },
  },
  fb: {
    margin: "0 0.5rem",
    color: "blue",
    fontSize: "35px",
  },
  insta: {
    margin: "0 0.5rem",
    color: "red",
    fontSize: "35px",
  },
}));

const SignUpCard = (props) => {
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <Typography color="primary" className={classes.signUpHeader} variant="h5">
        Sign Up
      </Typography>
      <p>using</p>
      <div className={classes.oAuthDiv}>
        {/* <Button>
          <FacebookIcon className={classes.fb}/>
        </Button> */}
        <Button>
          <img src={google} alt="Google" width="30" height="30" />
        </Button>
      </div>
      <Typography color="primary" className={classes.p} variant="h6">
        <Divider />
        OR
      </Typography>
      <Button className={classes.button} component={Link} to="/user/signup">
        Register
      </Button>
    </React.Fragment>
  );
};

export default connect(null, {})(SignUpCard);

//<SignUpModal title="SIGN UP"/>
