import React,{lazy,Suspense} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Theme from '../Themes/Theme';
import Header from '../components/pagesComponents/Header';

//Lazy Loading
const LoginPage = lazy(()=>import('./pages/LoginPage'));

const useStyles = makeStyles(theme => ({
  App: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    width: "100%",
    minHeight:"100vh",
  }
}))

const App = () => {

  const classes = useStyles();

  return ( 
    <React.Fragment>
      <div className={classes.App}>
        <ThemeProvider theme={Theme}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/user" component={()=><div>Home</div> }/>
              <Suspense fallback={<div>LOading..</div>}>
                <Route exact path="/">
                  <LoginPage/>
                </Route>
              </Suspense>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </React.Fragment>
   );
}
 
export default App;