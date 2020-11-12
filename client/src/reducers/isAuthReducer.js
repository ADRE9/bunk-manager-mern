/* eslint-disable import/no-anonymous-default-export */
import {CHECK_AUTHENTICATION} from '../actions/actionTypes';

export default (state=false, action) => {
  switch (action.type) {
    case CHECK_AUTHENTICATION: {
      return action.payload==="Error"?false:action.payload;
    }
    default: {
      return state;
    }  
  }
}