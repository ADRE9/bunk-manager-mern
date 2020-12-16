import React,{lazy,Suspense} from 'react';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { createStyles } from '@material-ui/core/styles';
import Theme from '../Themes/Theme';
import Header from '../components/pagesComponents/Header';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';

//Lazy Loading
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const SubjectPage = lazy(() => import('./pages/SubjectPage'));
const SemesterPage = lazy(() => import('./pages/SemesterPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FormPage = lazy(()=>import('./pages/FormPage'));

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
  },
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
              <Route path="/subject/new" exact>
                  <Suspense fallback={<div>Loading</div>}>
                    {!this.props.auth.isAuthenticated?<Redirect to='/'/>:<FormPage />}
                  </Suspense>
                </Route>
                <Route exact path="/">
                  <Suspense fallback={<div>loading..</div>}>
                    {this.props.auth.isAuthenticated?<Redirect to='/home'/>:<LoginPage />}
                  </Suspense>
                </Route>
                <Route exact path="/home">
                  <Suspense fallback={<div>Loading</div>}>
                  {!this.props.auth.isAuthenticated?<Redirect to='/'/>:<HomePage/>}
                  </Suspense>
                </Route>
                <Route path="/subject" exact>
                  <Suspense fallback={<div>Loading</div>}>
                    {!this.props.auth.isAuthenticated?<Redirect to='/'/>:<SubjectPage />}
                  </Suspense>
                </Route>
                <Route path="/semester" exact>
                  <Suspense fallback={<div>Loading</div>}>
                      {!this.props.auth.isAuthenticated?<Redirect to='/'/>:<SemesterPage />}
                  </Suspense>
                </Route>
                <Route path="/about" exact>
                  <Suspense fallback={<div>Loading</div>}>
                      {!this.props.auth.isAuthenticated?<Redirect to="/"/>:<AboutPage/>}
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
  return {auth:state.auth}
};

const styledApp = withStyles(styles)(App);
 
export default connect(mapStateToProps, {
  loadUser
})(styledApp);