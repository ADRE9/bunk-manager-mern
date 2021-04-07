import React from 'react';
import { motion } from 'framer-motion';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTablePage } from '../../actions/authActions';

const useStyles = makeStyles(theme => ({
    ...theme.pages,
    save: {
      width: '8%',
      marginTop: '58vh',
      borderRadius: '10px',
      marginLeft:"3rem",
    },
    cancel: {
      width: '8%',
      borderRadius: '10px',
      marginLeft: '1rem',
      marginTop: '58vh'
    }
  }))


const TimetablePage = (props) => {

  const classes = useStyles();
  console.log(props.tablePage)

  const containerVariants = {
    hidden: {
      opacity: 0,
      x:100,
      
    },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        delay:0.5,
        duration:0.5
      }
    },
    exit: {
      x: "-100vw",
      transition:{ease:"easeInOut"}
    },
    
  }
    
  return (
    <motion.div variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={classes.page}
    > <div>
      <Typography variant="h3" style={{color:"black", marginTop:'0.5vw',marginLeft: '5vw',textShadow:'2px 2px 2.2px #ff3399' }} >Time Table</Typography>
      <Typography variant="h4" style={{color:"black", marginTop:'0.5vw', marginLeft: '8vw'}} >Classes</Typography>
      <Typography variant="h4" style={{color:"black", marginTop:'-2vw',marginLeft: '65vw'}} >Labs</Typography>
      </div>
      <div>
      <Button onClick={() => props.setTablePage()} className={classes.save} variant='contained' color='secondary' component={ Link } to='/'>Save</Button>
      <Button onClick={() => props.setTablePage()} className={classes.cancel} variant='contained' color='secondary' component={ Link } to='/'>Cancel</Button>
      </div>
    </motion.div>
  )
}

const mapStateToProps = (state) => {
  return {tablePage:state.table.isTableOpen}
};

export default connect(mapStateToProps, {
  setTablePage
})(TimetablePage)