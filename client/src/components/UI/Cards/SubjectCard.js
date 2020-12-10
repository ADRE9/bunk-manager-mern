import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AttendanceBar from './AttendanceBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection:"column",
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
    height:"80%"
  },
  upperCard: {
    position:"relative",
    height:"70%"
  },
  lowerCard: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    padding:"0 15px",
  },
  bgImage: {
    width: "100%",
    height:"100%",
    objectFit:"cover"
  },
  CardSubject: {
    ...theme.typography.CardSubject
  },
  CardSemester: {
    ...theme.typography.CardSemester
  }
}));

const SubjectCard = (props) => {

  const classes = useStyles();
  const { name, bg, bunked, totalClass,semester } = props.data;

  const renderSvg = () => {
    function toBase64(arr) {
      arr = new Uint8Array(arr)
      return btoa(
         arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
   }
    if (props.data) {
      const image = toBase64(bg.data);
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
        <div className={classes.upperCard}>
          <CardContent className={classes.CardContent}>
            <Typography className={classes.CardSubject} variant="h5">
              {name}
            </Typography>
            <Typography className={classes.CardSemester} variant="h7">
              Semester {semester}
            </Typography>
          </CardContent>
          <div className={classes.imageDiv}>
            {renderSvg()}
          </div>
        </div>
        <div className={classes.lowerCard}>
          <AttendanceBar data={{bunked:bunked,totalClass:totalClass}}/>
        </div>
      </Card>
    </React.Fragment>
  )
}

export default SubjectCard;
//data:image/svg+xml;base64,