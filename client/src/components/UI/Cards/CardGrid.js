import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: "2rem",
    [theme.breakpoints.down('sm')]: {
      paddingBottom: "5rem",
    }
  },
}))

const CardGrid = (props) => {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            {props.children[0]}
          </Grid>
          <Grid item xs={12} sm={3}>
            {props.children[0]}
          </Grid>
          <Grid item xs={12} sm={3}>
            {props.children[0]}
          </Grid>
          <Grid item xs={12} sm={3}>
            {props.children[0]}
          </Grid>
          <Grid item xs={12} sm={3}>
            {props.children[0]}
          </Grid>
          <Grid item xs={12} sm={3}>
            {props.children[0]}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default CardGrid;
