import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  grids: {
    padding: "2rem 0",
  }
}))

const CardGrid = (props) => {
  const classes = useStyles(props);
  
  return (
    <React.Fragment>
      <Grid className={classes.grids}  container spacing={3}>
        {props.children}
      </Grid>
    </React.Fragment>
  )
}

export default CardGrid;
