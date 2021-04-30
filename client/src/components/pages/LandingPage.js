import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import homeDark from "./../../assets/svg/Home-Dark2.png";
import homeLight from "./../../assets/svg/Home-Light2.png";
import { ReactComponent as HomeShape } from "./../../assets/svg/shape.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  rootBox: {
    backgroundColor: () => {
      return theme.palette.type === "dark" && "#2A2438";
    },
  },

  btn: {
    width: 200,
    borderRadius: 50,
    height: 45,
    background: "rgba(18, 203, 196, 0.14)",
    color: !(theme.palette.type === "dark") && "#424874",
    "&:hover": {
      background: "rgba(18, 203, 196, 0.25)",
    },
  },

  homeImg: {
    width: "100%",
  },

  shape: {
    transform: "rotate(137deg)",
    position: "absolute",
    width: 300,
    left: -67,
    bottom: -195,
    fill: () => {
      return theme.palette.type === "dark" ? "#fbf9fadb" : "#A6B1E1";
    },
  },
}));

function LandingPage() {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Box className={classes.rootBox} px={5} py={12} position="relative">
      <Grid
        container
        style={{ display: "flex" }}
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        <Box pt={3} clone order={{ xs: 2, sm: 1 }}>
          <Grid item xs={12} sm={6} justify="center" align="left">
            <Typography variant="h3">Bunking Made Easy</Typography>
            <Box mt={10}>
              <Typography variant="h6">
                Manage your daily attendance easily with us.
                <br />
                Let’s get started!!
              </Typography>
            </Box>
            <Box
              mt={3}
              alignSelf="center"
              justifyContent="center"
              display="grid"
            >
              <Button
                component={Link}
                to="/user/signup"
                className={classes.btn}
                color="secondary"
              >
                Explore
              </Button>
            </Box>
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, sm: 2 }}>
          <Grid item xs={12} sm={6} align="center" justify="center">
            <img
              className={classes.homeImg}
              src={theme.palette.type === "dark" ? homeDark : homeLight}
              alt=""
            />
          </Grid>
        </Box>
      </Grid>
      <div className={classes.shape}>
        <HomeShape />
      </div>
    </Box>
  );
}

export default LandingPage;
