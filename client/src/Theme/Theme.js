import { createMuiTheme } from '@material-ui/core/styles';

const primaryBlack = "#2B2024";
const commmonWhite = "#FBF9FA";
const secondaryRed = "#FD0054";
const secondaryDark = "#A80038";

export default createMuiTheme({
  palette: {
    common: {
      black: `${primaryBlack}`,
      red: `${secondaryRed}`,
      white:`${commmonWhite}`
    },
    primary: {
      main:`${primaryBlack}`
    },
    secondary: {
      main: `${secondaryRed}`,
      dark:`${secondaryDark}`
    }
  },
  typography: {
    logo: {
      fontFamily: "Underdog, cursive",
      fontWeight: 900,
    }
  }
});