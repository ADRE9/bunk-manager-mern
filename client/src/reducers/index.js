import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer  from './errorReducer';
import subjectReducer from './subjectReducer'


export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  subject:subjectReducer
});