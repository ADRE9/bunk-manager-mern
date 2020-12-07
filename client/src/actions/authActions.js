import { USER_LOADED, USER_LOADING, LOGIN_SUCCESS, AUTH_ERROR, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS } from '../actions/actionTypes';
import history from '../utils/history';

import * as userApi from '../apis/userApi';

import { returnErrors,clearErrors } from './errorActions';


export const loadUser = () => async (dispatch, getState) => {
  
  //user Loading
  await dispatch({ type: USER_LOADING });

  try {
    //tokenConfig helper function used
    const response = await userApi.userData(tokenConfig(getState));
    dispatch(clearErrors());
    dispatch({
      type: USER_LOADED,
      payload: response.data
    })
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: AUTH_ERROR });
  }

}

//(reusable)helper function to get config/token
export const tokenConfig = getState => {
  //GET Token from localStorage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  
  //if token is present
  if (token) {
    config.headers["Authorization"] =`Bearer ${token}`;
  };

  return config.headers;
};

//login user
export const loggingUser = (userData) => async (dispatch, getState) => {
  //user Loading
  await dispatch({ type: USER_LOADING });

  try {
    //tokenConfig helper function used
    const response = await userApi.loginUser(userData);
    dispatch(clearErrors());
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: LOGIN_FAIL });
  }
};

//creating new user
export const createNewUser = (userData) => async (dispatch, getState) => {
  //user Loading
  await dispatch({ type: USER_LOADING });

  try {
    //tokenConfig helper function used
    const response = await userApi.createUser(userData);
    dispatch(clearErrors());
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data
    })
    history.push('/');
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: REGISTER_FAIL });
  }
};

export const logoutUser = () => async (dispatch, getState) => {
  try {
    await userApi.logoutUser();
    dispatch({ type: LOGOUT_SUCCESS });
  } catch(error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};