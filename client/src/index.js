import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { DarkTheme } from "./Themes/Theme";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import { history } from "./helpers/history";

import App from "./components/App";
import reducers from "./reducers";
import DarkThemeProvider from "./providers/DarkThemeProvider";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

//creating reset
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <DarkThemeProvider>
        <App />
      </DarkThemeProvider>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
