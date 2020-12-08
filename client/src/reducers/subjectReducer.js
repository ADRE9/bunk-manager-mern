/* eslint-disable import/no-anonymous-default-export */
import { CREATE_SUBJECT_TEMPLATE } from '../actions/actionTypes';

const initialState = {};

export default (state=initialState,action) => {
  switch (action.type) {
    case CREATE_SUBJECT_TEMPLATE:
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
};