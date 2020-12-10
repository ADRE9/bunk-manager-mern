import { USER_LOADED, USER_LOADING, LOGIN_SUCCESS, AUTH_ERROR, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS,CLEAR_SUBJECTS } from '../actions/actionTypes';
import history from '../utils/history';

import * as userApi from '../apis/userApi';

import { createSubjectTemplate,getTemplateSubjects } from './subjectActions';
import { returnErrors, clearErrors } from './errorActions';

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



export const loadUser = () => async (dispatch, getState) => {
  
  //user Loading
  await dispatch({ type: USER_LOADING });

  try {
    //tokenConfig helper function used
    const response = await userApi.userData(tokenConfig(getState));
    dispatch(clearErrors());
    await dispatch({
      type: USER_LOADED,
      payload: response.data
    });
    dispatch(getTemplateSubjects());
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: AUTH_ERROR });
  }

}

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
    await dispatch(getTemplateSubjects());
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
    await dispatch(createSubjectTemplate());
    await dispatch(getTemplateSubjects());
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: REGISTER_FAIL });
  }
};

export const logoutUser = () => async (dispatch, getState) => {
  try {
    await userApi.logoutUser(tokenConfig(getState));
    dispatch({ type: CLEAR_SUBJECTS });
    dispatch({ type: LOGOUT_SUCCESS });
  } catch(error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const logoutAllUser = () => async (dispatch, getState) => {
  try {
    await userApi.logoutFromAllDevices(tokenConfig(getState));
    dispatch({ type: LOGOUT_SUCCESS });
  } catch(error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};
