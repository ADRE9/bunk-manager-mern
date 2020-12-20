import React,{lazy,Suspense} from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import {history} from '../helpers/history';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { createStyles } from '@material-ui/core/styles';
import Theme from '../Themes/Theme';
import Header from '../components/pagesComponents/Header';
import AuthHeader from '../components/pagesComponents/AuthHeader';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import PrivateRoute from './PrivateRoute';

//Lazy Loading
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const SubjectPage = lazy(() => import('./pages/SubjectPage'));
const SemesterPage = lazy(() => import('./pages/SemesterPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AddSubjectPage = lazy(() => import('./pages/AddSubjectPage'));
const EditSubjectPage = lazy(()=>import('./pages/EditSubjectPage'));

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
    let { from } = history.location.state || { from: { pathname: "/" } };
    this.props.loadUser(from);
  };

  render() {
    const { classes } = this.props;
    return ( 
      <React.Fragment>
        <div className={classes.App}>
          <ThemeProvider theme={Theme}>
            <Router history={history}>
              {this.props.auth.isAuthenticated?<AuthHeader/>:<Header/>}
              <Switch>
              <PrivateRoute exact  path="/">
                  <Suspense fallback={<div>Loading</div>}>
                    <HomePage/>
                  </Suspense>
                </PrivateRoute>
                <Route exact path="/auth">
                  <Suspense fallback={<div>Loading</div>}>
                    <LoginPage/>
                  </Suspense>
                </Route>
                <PrivateRoute exact  path="/subject">
                  <Suspense fallback={<div>Loading</div>}>
                    <SubjectPage/>
                  </Suspense>
                </PrivateRoute>
                <PrivateRoute exact  path="/semester">
                  <Suspense fallback={<div>Loading</div>}>
                    <SemesterPage/>
                  </Suspense>
                </PrivateRoute>
                <PrivateRoute exact  path="/about">
                  <Suspense fallback={<div>Loading</div>}>
                    <AboutPage/>
                  </Suspense>
                </PrivateRoute>
                <PrivateRoute exact  path="/subject/new">
                  <Suspense fallback={<div>Loading</div>}>
                    <AddSubjectPage/>
                  </Suspense>
                </PrivateRoute>
                <PrivateRoute exact  path="/subject/:id">
                  <Suspense fallback={<div>Loading</div>}>
                    <EditSubjectPage/>
                  </Suspense>
                </PrivateRoute>
              </Switch>
            </Router>
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