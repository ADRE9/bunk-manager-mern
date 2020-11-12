import { combineReducers } from 'redux';
import userReducers from './userReducers';
import isAuthReducer from './isAuthReducer';


export default combineReducers({
  userData: userReducers,
  isAuthenticated:isAuthReducer
});