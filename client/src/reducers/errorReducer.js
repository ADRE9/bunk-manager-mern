/* eslint-disable import/no-anonymous-default-export */
import { GET_ERROR, CLEAR_ERRORS } from "../actions/actionTypes";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};
