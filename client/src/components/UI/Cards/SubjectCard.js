import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: "300px",
    minHeight:"200px"
  }
}));

const SubjectCard = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography>
            HELLO MOTO
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default SubjectCard;
