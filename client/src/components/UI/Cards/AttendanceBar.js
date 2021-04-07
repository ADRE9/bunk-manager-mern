import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardMenu from "./CardMenu";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  hiddenBox: {
    padding: "0",
    //marginBottom:"10px"
  },
  hiddenButtonBunk: {
    color: "red",
  },
  hiddenButtonClass: {
    color: "green",
  },
}));

const AttendanceBar = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { bunked, totalClass } = props.data;
  const calculatePercentage = () => {
    if (totalClass === 0) {
      return 30;
    } else {
      return (bunked / totalClass) * 100;
    }
  };

  return (
    <React.Fragment>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={calculatePercentage()} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            calculatePercentage()
          )}%`}</Typography>
        </Box>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box
          className={classes.hiddenBox}
          display="flex"
          width="100%"
          justifyContent="space-around"
        >
          <CardMenu data={{ id: props.data.id }} />
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

export default AttendanceBar;
