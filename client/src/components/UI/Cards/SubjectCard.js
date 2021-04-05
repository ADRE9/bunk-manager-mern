
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AttendanceBar from './AttendanceBar';
import CardMenu from './CardMenu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "250px",
  },
  imageDiv: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  CardContent: {
    position: "relative",
    zIndex: 2,
    width: "100%",
  },
  upperCard: {
    width: "100%",
    position: "relative",
    //minHeight:"70%",
    flexGrow: 1,
    display: "flex",
  },
  lowerCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 15px",
    //flexGrow: 1,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  CardSubject: {
    ...theme.typography.CardSubject,
  },
  CardSemester: {
    ...theme.typography.CardSemester,
  },
  MoreVertIcon: {
    color: '#FFF',
    transform: 'scale(1.3)',
    marginLeft: '88%',
    marginTop: '-7rem',
    height: '35px',
    width: '35px'
  }
}));

const SubjectCard = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    name,
    backgroundImage,
    semester,
    totalClasses,
    classesBunked,
    _id,
  } = props.data;

  const renderSvg = () => {
    function toBase64(arr) {
      arr = new Uint8Array(arr);
      return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
      );
    }
    if (props.data) {
      const image = toBase64(backgroundImage.data);
      return (
        <React.Fragment>
          <img
            className={classes.bgImage}
            src={`data:image/svg+xml;base64,${image}`}
            alt="images"
          />
        </React.Fragment>
      );
    } else return null;
  };

  const renderEdit = () => {
    if (window.location.pathname === "/subject") {
      return (
        <React.Fragment>
          <CardMenu data={{ id: _id }} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <AttendanceBar
            data={{ bunked: classesBunked, totalClass: totalClasses, id: _id }}
          />
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <Card className={classes.card}>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Change Pic</MenuItem>
        <MenuItem onClick={handleClose}>Change Pic</MenuItem>
        <MenuItem onClick={handleClose}>Change Pic</MenuItem>
      </Menu>
        <div className={classes.upperCard}>
          <CardContent className={classes.CardContent}>
            <Typography className={classes.CardSubject} variant="h5">
              {name}
            </Typography>
            <Typography className={classes.CardSemester} variant="subtitle1">
              Semester {semester}
            </Typography>
            <IconButton className={classes.MoreVertIcon} onClick={handleClick}><MoreVertIcon /></IconButton>
          </CardContent>
          <div className={classes.imageDiv}>{renderSvg()}</div>
        </div>
        <div className={classes.lowerCard}>{renderEdit()}</div>
      </Card>
    </React.Fragment>
  );
};

export default SubjectCard;
//data:image/svg+xml;base64,
