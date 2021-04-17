import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createActiveSubject } from "../../actions/subjectActions";
import { Typography } from "@material-ui/core";
import UpdateForm from "../pagesComponents/UpdateForm";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  ...theme.pages,
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
  },
}));

const AddSubjectPage = (props) => {
  const classes = useStyles(props);

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
      transition: { ease: "easeInOut" },
    },
  };

  const addSubject = (data) => {
    data.semester = props.currentSem;
    props.createActiveSubject(data);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.page}
    >
      <Container className={classes.container}>
        <UpdateForm name="Add New Subject" subjectMethod={(data)=>addSubject(data)}/>
      </Container>
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return { currentSem: state.auth.user.currentSemester };
};

export default connect(mapStateToProps, {
  createActiveSubject,
})(AddSubjectPage);
