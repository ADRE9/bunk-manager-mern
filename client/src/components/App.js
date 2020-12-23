import React,{lazy,Suspense} from 'react';
import { Route, Switch,withRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { createStyles } from '@material-ui/core/styles';
import Theme from '../Themes/Theme';
import Header from '../components/pagesComponents/Header';
import LoadingPage from './pages/LoadingPage';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import { getAllSemesters } from "../actions/subjectActions";
import AuthHeader from '../components/pagesComponents/AuthHeader';
import PrivateRoute from './PrivateRoute';
import { AnimatePresence } from 'framer-motion';

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
    let { from } = this.props.history.location.state || { from: { pathname: "/" } };
    this.props.loadUser(from);
    this.props.getAllSemesters();
  };

  render() {
    
    const { classes } = this.props;
    const{location}=this.props.history
    return ( 
      <div className={classes.App}>
        <AuthHeader/>
        <AnimatePresence>
                <Switch location={location} key={location.key}>
                  <Route exact path="/auth">
                    <Suspense fallback={<LoadingPage/>}>
                      <LoginPage/>
                    </Suspense>
                  </Route>
                  <PrivateRoute exact  path="/subject">
                    <Suspense fallback={<LoadingPage/>}>
                      <SubjectPage/>
                    </Suspense>
                  </PrivateRoute>
                  <PrivateRoute exact  path="/semester">
                    <Suspense fallback={<LoadingPage/>}>
                      <SemesterPage/>
                    </Suspense>
                  </PrivateRoute>
                  <PrivateRoute exact  path="/about">
                    <Suspense fallback={<LoadingPage/>}>
                      <AboutPage/>
                    </Suspense>
                  </PrivateRoute>
                  <PrivateRoute exact  path="/subject/new">
                    <Suspense fallback={<LoadingPage/>}>
                      <AddSubjectPage/>
                    </Suspense>
                  </PrivateRoute>
                  <PrivateRoute exact  path="/subject/:id">
                    <Suspense fallback={<LoadingPage/>}>
                      <EditSubjectPage/>
                    </Suspense>
                  </PrivateRoute>
                  <PrivateRoute exact  path="/">
                    <Suspense fallback={<LoadingPage/>}>
                      <HomePage/>
                    </Suspense>
                  </PrivateRoute>
                </Switch>
              </AnimatePresence>
        </div>
     );
  }
};

const mapStateToProps = (state) => {
  return {auth:state.auth}
};

const styledApp = withStyles(styles)(App);
 
export default withRouter(connect(mapStateToProps, {
  loadUser,getAllSemesters
})(styledApp));