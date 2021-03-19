import { createMuiTheme } from '@material-ui/core/styles';

const BunkBlack = "#2B2024";
const BunkSecondary = "#FD0054";
const BunkSecondaryDark = "#A80038";
const BunkLight = "#FBF9FA";

const DarkBlack = "#2B2024";
const DarkSecondary = "#12CBC4";
const DarkSecondaryDark = "#0D9C97";
const DarkLight = "#FBF9FA";

export const LigthTheme = createMuiTheme({
  palette: {
    common: {
      black: `${BunkBlack}`,
      white: `${BunkLight}`
    },
    primary: {
      main: `${BunkBlack}`,
    },
    secondary: {
      main: `${BunkSecondary}`,
      dark: `${BunkSecondaryDark}`
    },
  },
  typography: {
    CardSubject: {
      color: "white",
      fontWeight: "500"
    },
    CardSemester: {
      color: "white",
      fontWeight: "200"
    }
  },
  authForm: {
    loginHeader: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      marginTop: "2rem",
      marginBottom: "0",
      textTransform: "uppercase"
    },
    input: {
      margin: "10px 0px",
      width: "50%",
      height: "30px",
      borderRadius: "15px",
      border: "1px solid black",
      paddingLeft: "1rem",
      "&:focus": {
        outline: "none"
      },
      "&::placeholder": {
        fontFamily: "Montserrat, sans-serif",
        color: "black",
        fontWeight: 400,
      }
    },
    form: {
      display: "flex",
      width: "100%",
      margin: 0,
      padding: 0,
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexGrow: 1,
    },
    button: {
      borderRadius: "30px",
      fontFamily: "Montserrat, sans-serif",
      backgroundColor: "#FD0054",
      backgroundImage: "linear-gradient(147deg, #FD0054 0%, #FD0054 74%)",
      width: "130px",
      color: "white"
    },
  },
  pages: {
    page: {
      //backgroundColor:"black",
      flexGrow: 1,
      minHeight: "90vh",
      marginTop: "0rem",
      display: "flex",
      flexDirection: "column"
    },
    container: {
      flexGrow: 1,
      paddingTop: "2rem",

    }
  },
});
export const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      black: `${DarkBlack}`,
      white: `${DarkLight}`
    },
    primary: {
      main: `${DarkBlack}`,
    },
    secondary: {
      main: `${DarkSecondary}`,
      dark: `${DarkSecondaryDark}`
    },
  },
  typography: {
    CardSubject: {
      color: "white",
      fontWeight: "500"
    },
    CardSemester: {
      color: "white",
      fontWeight: "200"
    }
  },
  authForm: {
    loginHeader: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      marginTop: "2rem",
      marginBottom: "0",
      textTransform: "uppercase"
    },
    input: {
      margin: "10px 0px",
      width: "50%",
      height: "30px",
      borderRadius: "15px",
      border: "1px solid black",
      paddingLeft: "1rem",
      "&:focus": {
        outline: "none"
      },
      "&::placeholder": {
        fontFamily: "Montserrat, sans-serif",
        color: "black",
        fontWeight: 400,
      }
    },
    form: {
      display: "flex",
      width: "100%",
      margin: 0,
      padding: 0,
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexGrow: 1,
    },
    button: {
      borderRadius: "30px",
      fontFamily: "Montserrat, sans-serif",
      backgroundColor: "#12CBC4",
      backgroundImage: "linear-gradient(147deg, #12CBC4 0%, #12CBC4 74%)",
      width: "130px",
      color: "white"
    },
  },
  pages: {
    page: {
      //backgroundColor:"black",
      flexGrow: 1,
      minHeight: "90vh",
      marginTop: "0rem",
      display: "flex",
      flexDirection: "column"
    },
    container: {
      flexGrow: 1,
      paddingTop: "2rem",

    }
  },
});

