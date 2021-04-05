import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_SUBJECTS,
  DELETING_USER,
  USER_DELETED,
  UPDATING_USER,
  USER_UPDATED,
} from "../actions/actionTypes";

import { history } from "../helpers/history";

import * as userApi from "../apis/userApi";

import {
  createSubjectTemplate,
  getCurrentSemesterSubjects,
} from "./subjectActions";
import { returnErrors, clearErrors } from "./errorActions";

//(reusable)helper function to get config/token
export const tokenConfig = (getState) => {
  //GET Token from localStorage
  const token = getState().auth.token;
  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //if token is present
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config.headers;
};

export const loadUser = (from) => async (dispatch, getState) => {
  //user Loading
  dispatch({ type: USER_LOADING });

  try {
    //tokenConfig helper function used
    const res = await userApi.userData(tokenConfig(getState));
    dispatch(clearErrors());
    await dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    history.replace(from);
    await dispatch(getCurrentSemesterSubjects());
  } catch (error) {
    await dispatch(returnErrors(error.response, error.response));
    dispatch({ type: AUTH_ERROR });
  }
};

//login user
export const loggingUser = (userData, from) => async (dispatch, getState) => {
  //user Loading
  await dispatch({ type: USER_LOADING });

  try {
    //tokenConfig helper function used
    const response = await userApi.loginUser(userData);
    dispatch(clearErrors());
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    history.replace(from);
    await dispatch(getCurrentSemesterSubjects());
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: LOGIN_FAIL });
  }
};

//creating new user
export const createNewUser = (userData, from) => async (dispatch, getState) => {
  //user Loading
  await dispatch({ type: USER_LOADING });

  try {
    //tokenConfig helper function used
    const response = await userApi.createUser(userData);
    dispatch(clearErrors());
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
    history.replace(from);
    await dispatch(createSubjectTemplate());
    await dispatch(getCurrentSemesterSubjects());
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
    dispatch({ type: REGISTER_FAIL });
  }
};

//logging out user
export const logoutUser = () => async (dispatch, getState) => {
  try {
    await userApi.logoutUser(tokenConfig(getState));
    dispatch({ type: CLEAR_SUBJECTS });
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

//logging out user from all devices
export const logoutAllUser = () => async (dispatch, getState) => {
  try {
    await userApi.logoutFromAllDevices(tokenConfig(getState));
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

//deleting user
export const deleteUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETING_USER });
    const response = await userApi.deleteUser(tokenConfig(getState));
    dispatch({ type: CLEAR_SUBJECTS });
    dispatch({ type: USER_DELETED, payload: response.data });
  } catch (e) {
    await dispatch(returnErrors(e.response.data, e.response.status));
  }
};

//updating userdata
export const updateUserData = (updateData) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATING_USER });
    const response = await userApi.updateUser(
      tokenConfig(getState),
      updateData
    );
    dispatch({ type: USER_UPDATED, payload: response.data.user });
  } catch (e) {
    await dispatch(returnErrors(e.response.data, e.response.status));
  }
};
