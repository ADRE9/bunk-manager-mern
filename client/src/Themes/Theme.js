import { createMuiTheme } from "@material-ui/core/styles";

const BunkBlack = "#424874";//light text
const BunkSecondary = "#FD0054";
const BunkSecondaryDark = "#A6B1E1"//light svg

const BunkLight = "#FBF9FA";//light bg

const DarkBlack = "#2A2438"//dark bg
const DarkSecondary = "#5C5470";
const DarkSecondaryDark = "#DBD8E3";//dark bottom svg
const DarkLight = "#DBD8E3";//dark text

export const LightTheme = createMuiTheme({
  palette: {
    common: {
      black: `${BunkBlack}`,
      white: `${BunkLight}`,
    },
    primary: {
      main: `${BunkBlack}`,
    },
    secondary: {
      main: `${BunkSecondary}`,
      dark: `${BunkSecondaryDark}`,
    },
  },
  typography: {
    CardSubject: {
      color: "white",
      fontWeight: "500",
    },
    CardSemester: {
      color: "white",
      fontWeight: "200",
    },
  },
  authForm: {
    loginHeader: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      marginTop: "2rem",
      marginBottom: "0",
      textTransform: "uppercase",
    },
    input: {
      margin: "10px 0px",
      width: "50%",
      height: "30px",
      borderRadius: "4px",
      border: "1.2px solid  #B4BEC8",
      paddingLeft: "1rem",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        fontFamily: "Montserrat, sans-serif",
        color: "#B4BEC8",
        fontWeight: 400,
      },
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
      color: "white",
      background: "#F4EEFF",
boxShadow: "2px 10px 28px rgba(75, 0, 129, 0.12)",
borderRadius: "10px"
    },
  },
  pages: {
    page: {
      backgroundColor:{BunkLight},
      flexGrow: 1,
      minHeight: "90vh",
      marginTop: "0rem",
      display: "flex",
      flexDirection: "column",
      fontFamily:"Google Sans",
      position: "relative",
      width: "1440px",
      height: "1024px",
      color:{BunkBlack}
    }
    /*container: {
      flexGrow: 1,
      paddingTop: "2rem",
    },*/
  },
});
export const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    common: {
      black: `${DarkBlack}`,
      white: `${DarkLight}`,
    },
    primary: {
      main: `${DarkBlack}`,
    },
    secondary: {
      main: `${DarkSecondary}`,
      dark: `${DarkSecondaryDark}`,
    },
  },
  typography: {
    CardSubject: {
      color: "white",
      fontWeight: "500",
    },
    CardSemester: {
      color: "white",
      fontWeight: "200",
    },
  },
  authForm: {
    loginHeader: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      marginTop: "2rem",
      marginBottom: "0",
      textTransform: "uppercase",
    },
    input: {
      margin: "10px 0px",
      width: "50%",
      height: "30px",
      borderRadius: "15px",
      border: "1px solid black",
      paddingLeft: "1rem",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        fontFamily: "Montserrat, sans-serif",
        color: "black",
        fontWeight: 400,
      },
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
      color: "white",
    },
  },
  pages: {
    page: {
      backgroundColor:{DarkBlack},
      flexGrow: 1,
      minHeight: "90vh",
      marginTop: "0rem",
      display: "flex",
      flexDirection: "column",
    },
    /*container: {
      flexGrow: 1,
      paddingTop: "2rem",
    },*/
  },
});
