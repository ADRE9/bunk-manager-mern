import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardGrid from "../UI/Cards/CardGrid";
import { labCard, classCard } from "../../utils/cardUtil";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  ...theme.pages,
  container: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
  },
}));

const HomePage = (props) => {
  const classes = useStyles(props);
  const hasClasses = classCard(props)[0]
  const hasLabs = labCard(props)[0]

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition:{ease:"easeInOut"}
    }
  }


  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.page}
    >
      <Container className={classes.container}>
      {<Typography variant="h3" style={{color:"black", marginTop:'0.5vw', textShadow:'2px 2px 2.2px #ff3399'}} >{hasClasses?"Today's Classes":"No classes today"}</Typography>}
        <CardGrid className={classes.pageGrid} >
          {classCard(props)}
        </CardGrid>
        {<Typography variant="h3" style={{color:"black", marginTop:'0.5vw', textShadow:'2px 2px 2.2px #ff3399'}} >{hasLabs?"Today's Labs":"No labs today"}</Typography>}
        <CardGrid>
          {labCard(props)}
        </CardGrid>
      </Container>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.isAuthenticated,
    subjects: Object.values(state.subject.subjects),
  };
};

export default connect(mapStateToProps, null)(HomePage);
