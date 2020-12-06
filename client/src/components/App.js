import React,{lazy,Suspense} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { createStyles } from '@material-ui/core/styles';
import Theme from '../Themes/Theme';
import Header from '../components/pagesComponents/Header';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';

//Lazy Loading
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(()=>import('./pages/HomePage'));

const styles = (theme) => createStyles({
  App: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    width: "100%",
    minHeight: "100vh",
  }
});

class App extends React.Component {


  componentDidMount() {
    this.props.loadUser();
  };

  render() {
    const { classes } = this.props;
    return ( 
      <React.Fragment>
        <div className={classes.App}>
          <ThemeProvider theme={Theme}>
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path="/auth">
                  <Suspense fallback={<div>loading..</div>}>
                    <LoginPage />
                  </Suspense>
                </Route>
                <Route exact path="/">
                  <Suspense fallback={<div>Loading</div>}>
                    <HomePage/>
                  </Suspense>
                </Route>
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </div>
      </React.Fragment>
     );
  }
};

const mapStateToProps = (state) => {
  return {isAuth:state.isAuthenticated}
};

const styledApp = withStyles(styles)(App);
 
export default connect(mapStateToProps, {
  loadUser
})(styledApp);