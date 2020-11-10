/* eslint-disable import/no-anonymous-default-export */
import { CREATE_USER,CREATE_CR_USER } from '../actions/actionTypes';

export default (state={},action) => {
  switch (action.type) {
    case CREATE_USER: {
      return {...action.payload};
    }
    case CREATE_CR_USER: {
      return {...action.payload}
    }
    default: {
      return state;
      }
  }
};