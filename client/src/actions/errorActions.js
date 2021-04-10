import { GET_ERROR, CLEAR_ERRORS } from "../actions/actionTypes";

//RETURN ERROR
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERROR,
    payload: { msg, status, id },
  };
};

//CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
