import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  
}));

const AttendanceBar = (props) => {
  
  const classes = useStyles();
  const { bunked, totalClass } = props.data;
  const calculatePercentage = () => {
    if (totalClass === 0) {
      return null;
    } else {
      return (bunked / (totalClass)) * 100;
    }
  };

  const renderAttendanceBar = () => {
    if (calculatePercentage()) {
      return (
        <React.Fragment>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={calculatePercentage()} />
            </Box>
            <Box minWidth={35}>
              <Typography variant="body2" color="textSecondary">{`${Math.round(calculatePercentage())}%`}</Typography>
            </Box>
          </Box>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <p>Enjoy Till Classes Start!</p>
        </React.Fragment>
      )
    }
  };

  return (
    <React.Fragment>
      {renderAttendanceBar()}
    </React.Fragment>
  )
};

export default AttendanceBar;
