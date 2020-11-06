import React,{lazy,Suspense} from 'react';
import Header from './UI/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Theme from '../Theme/Theme';

const LoginPage = lazy(() => import('./pages/LoginPage'));

const useStyles = makeStyles(theme => ({
  App: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }
}));

const App = (props) => {

  const classes = useStyles(props);

  return ( 
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <div className={classes.App}>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>HEllo</div>} />
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/user" component={LoginPage}/>
            </Suspense>
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>

   );
}
 
export default App;