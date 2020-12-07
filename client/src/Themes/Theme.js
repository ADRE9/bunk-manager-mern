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
  authForm: {
    loginHeader: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      marginTop: "2rem",
      marginBottom: "0",
      textTransform:"uppercase"
    },
    input: {
      margin: "10px 0px",
      width: "80%",
      height:"30px",
      borderRadius: "15px", 
      border: "1px solid black",
      paddingLeft:"1rem",
      "&:focus": {
        outline:"none"
      },
      "&::placeholder": {
        fontFamily: "Montserrat, sans-serif",
        color: "black",
        fontWeight:400,
      }
    },
    form: {
      display:"flex",
      width: "100%",
      margin: 0,
      padding:0,
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
      color:"white"
    },
  }
});