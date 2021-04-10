import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
//import FacebookIcon from '@material-ui/icons/Facebook';
import Divider from "@material-ui/core/Divider";
import google from "../../../assets/svg/google.svg";
import GoogleLogin from "react-google-login";
import SignUpPage, {fillForm} from '../../pages/SignUpPage'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

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
  

  const [googleDetails, setGoogleDetails] = useState({
    name:  "",
    email: "",
    img: "",
    googleId: "",
  })
  const [open, setOpen] = React.useState(true);
  const onCloseModal = () => {
    setOpen(!open);
    setGoogleDetails({ name :""})
  }
  const classes = useStyles(props);

  // Response form google
  const responseGoogle = (response) => {
      console.log(response)
      setGoogleDetails({
        name: response.profileObj.name,
        email: response.profileObj.email,
        img: response.profileObj.imageUrl,
        googleId: response.profileObj.googleId,
      })   
      setOpen(true)
  };

//Taking other details after fillig all the details from google.
  if(googleDetails.name !== "") {
    return (
      <div>
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal} center>
        <SignUpPage formData={googleDetails} />
      </Modal>
    </div>
      
    )
  }

  
 

  return (
    <React.Fragment>
      <Typography color="primary" className={classes.signUpHeader} variant="h5">
        Sign Up
      </Typography>
      <p>using</p>
      <div className={classes.oAuthDiv}>
           <GoogleLogin
                clientId="207958850344-63pkahrt4o4mf1soifq2i86f0lpik9tf.apps.googleusercontent.com"
                buttonText={"Sign Up"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
        {/* <Button>
          <FacebookIcon className={classes.fb}/>
        </Button> 
        <Button>
          <img src={google} alt="Google" width="30" height="30" />
        </Button> */}
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
