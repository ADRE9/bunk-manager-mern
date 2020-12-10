import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    position:"relative",
    minWidth: "200px",
    height:"180px"
  },
  imageDiv: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height:"100%",
    zIndex: 1,
    
  },
  CardContent: {
    position: "relative",
    zIndex: 2,
  },
  bgImage: {
    width: "100%",
    height:"100%",
    objectFit:"cover"
  }
}));

const SubjectCard = (props) => {

  const classes = useStyles();

  const renderSvg = () => {
    function toBase64(arr) {
      arr = new Uint8Array(arr)
      return btoa(
         arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
   }
    if (props.bg) {
      const image = toBase64(props.bg.data);
      return (
        <React.Fragment>
          <img className={classes.bgImage} src={`data:image/svg+xml;base64,${image}`}
          alt="images" />
        </React.Fragment>
      )
    } else return null;
  };

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent className={classes.CardContent}>
          <Typography>
            {props.name}
          </Typography>
        </CardContent>
        <div className={classes.imageDiv}>
          {renderSvg()}
        </div>
      </Card>
    </React.Fragment>
  )
}

export default SubjectCard;
//data:image/svg+xml;base64,