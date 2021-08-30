import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { DarkTheme, LightTheme } from "../Themes/Theme";
import LoadingPage from "./pages/LoadingPage";
import { AuthProvider } from "../context/AuthProvider";
// import NotFound from "./NotFound/NotFound"

import { connect } from "react-redux";
import { loadUser } from "../actions/authActions";
import { getAllSemesters } from "../actions/subjectActions";
import AuthHeader from "../components/pagesComponents/AuthHeader";
import Navbar from"../components/pagesComponents/navbar";
import PrivateRoute from "./PrivateRoute";
import { AnimatePresence } from "framer-motion";
// import Home from "./pages/Home";
import { DarkThemeContext } from "../providers/DarkThemeProvider";

//Lazy Loading
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const SubjectPage = lazy(() => import('./pages/SubjectPage'));
const SemesterPage = lazy(() => import('./pages/SemesterPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AddSubjectPage = lazy(() => import('./pages/AddSubjectPage'));
const EditSubjectPage = lazy(() => import('./pages/EditSubjectPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const TimetablePage = lazy(() => import('./pages/TimetablePage'));
//const Navbar=lazy(() => import('./pages/home/navbar/navbar.js'));


const styles = (theme) =>
  createStyles({
    App: {
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: 0,
      top: 0,
      left: 0,
      width: "100%",
      minHeight: "100vh",
      
      position: "relative",
    },
  });

const App = (props) => {
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);

  useEffect(() => {
    let { from } = props.history.location.state || { from: { pathname: "/" } };
    props.loadUser(from);
    props.getAllSemesters();
  }, []);

  const { classes } = props;
  const { location } = props.history;

  return (
    <AuthProvider>
        <ThemeProvider theme={darkMode ? LightTheme : LightTheme}>
      {/* <div className={classes.App}>
        <Home/>
         */}

        <AnimatePresence>
               <AuthHeader/>
                <Switch location={location} key={location.pathname}>   
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
                  <PrivateRoute exact  path="/timetable">
                    <Suspense fallback={<LoadingPage/>}>
                      <TimetablePage/>
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
                  <Route exact path="/user/signup">
                    <Suspense fallback={<LoadingPage/>}>
                      <SignUpPage/>
                    </Suspense>
                  </Route>
                  <Route exact path="/auth">
                    <Suspense fallback={<LoadingPage/>}>
                      <LoginPage/>
                    </Suspense>
                  </Route>
                  <PrivateRoute exact  path="/navbar">
                    <Suspense fallback={<LoadingPage/>}>
                      <Navbar/>
                    </Suspense>
                  </PrivateRoute>
                </Switch>
              </AnimatePresence>
            
{/*      
        </div> */}
    </ThemeProvider>
    </AuthProvider>
  );
};

// class App extends React.Component {

// componentDidMount() {
//   // let { from } = this.props.history.location.state || { from: { pathname: "/" } };
//   // this.props.loadUser(from);
//   // this.props.getAllSemesters();
// };

// render() {

//   // const { classes } = this.props;
//   // const{location}=this.props.history
//   return (
// <div className={classes.App}>
//   <AuthHeader/>
//   <AnimatePresence>
//           <Switch location={location} key={location.pathname}>
//             <PrivateRoute exact  path="/subject">
//               <Suspense fallback={<LoadingPage/>}>
//                 <SubjectPage/>
//               </Suspense>
//             </PrivateRoute>
//             <PrivateRoute exact  path="/semester">
//               <Suspense fallback={<LoadingPage/>}>
//                 <SemesterPage/>
//               </Suspense>
//             </PrivateRoute>
//             <PrivateRoute exact  path="/about">
//               <Suspense fallback={<LoadingPage/>}>
//                 <AboutPage/>
//               </Suspense>
//             </PrivateRoute>
//             <PrivateRoute exact  path="/subject/new">
//               <Suspense fallback={<LoadingPage/>}>
//                 <AddSubjectPage/>
//               </Suspense>
//             </PrivateRoute>
//             <PrivateRoute exact  path="/subject/:id">
//               <Suspense fallback={<LoadingPage/>}>
//                 <EditSubjectPage/>
//               </Suspense>
//             </PrivateRoute>
//             <PrivateRoute exact  path="/">
//               <Suspense fallback={<LoadingPage/>}>
//                 <HomePage/>
//               </Suspense>
//             </PrivateRoute>
//             <Route exact path="/user/signup">
//               <Suspense fallback={<LoadingPage/>}>
//                 <SignUpPage/>
//               </Suspense>
//             </Route>
//             <Route exact path="/auth">
//               <Suspense fallback={<LoadingPage/>}>
//                 <LoginPage/>
//               </Suspense>
//             </Route>
//           </Switch>
//         </AnimatePresence>
//         <Footer />
//   </div>
//  );
//   }
// };

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

const styledApp = withStyles(styles)(App);

export default withRouter(
  connect(mapStateToProps, {
    loadUser,
    getAllSemesters,
  })(styledApp)
);
