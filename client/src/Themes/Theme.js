import { createMuiTheme } from '@material-ui/core/styles';

const BunkBlack = "#2B2024";
const BunkSecondary = "#FD0054";
const BunkSecondaryDark = "#A80038";
const BunkLight = "#FBF9FA";

export default createMuiTheme({
  palette: {
    common: {
      black: `${BunkBlack}`,
      white:`${BunkLight}`
    },
    primary: {
      main:`${BunkBlack}`,
    },
    secondary: {
      main: `${BunkSecondary}`,
      dark:`${BunkSecondaryDark}`
    },
  },
});