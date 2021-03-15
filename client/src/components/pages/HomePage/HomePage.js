import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CardGrid from '../../UI/Cards/CardGrid';
import { labCard, classCard } from '../../../utils/cardUtil';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import ToggleTheme from '../../ToggleTheme';
import { ThemeContext } from '../../../providers/ChangeThemeProvider';
import { Headings } from './style';

const useStyles = makeStyles(theme => ({
  ...theme.pages,
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    }
  }
}))

const HomePage = (props) => {
  const { newTheme } = useContext(ThemeContext);

  const classes = useStyles(props);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" }
    }
  }

  return (
    <Headings newTheme={newTheme}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${classes.page} HomeDiv`}
      >
        <Container className={classes.container}>
          <div className={`${classes.pageHead} classHead`}>
            {classCard(props) ?
              <Typography variant="h2">CLASSES</Typography>
              : null}
            {/* ToggleTheme Button */}
            {/* <ToggleTheme /> */}
          </div>
          <CardGrid className={classes.pageGrid} >
            {classCard(props)}
          </CardGrid>
          {labCard(props) ? <Typography variant="h2">LABS</Typography> : null}
          <CardGrid>
            {labCard(props)}
          </CardGrid>
        </Container>
      </motion.div>
    </Headings>
  )
};

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated, subjects: Object.values(state.subject.subjects) }
};

export default connect(mapStateToProps, null)(HomePage);