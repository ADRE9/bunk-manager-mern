import * as userApi from '../apis/userApi';
import {CREATE_USER,CREATE_CR_USER, LOGIN_USER,CHECK_AUTHENTICATION } from './actionTypes';

export const createUser = (userData)=>async (dispatch) => {
  const response = await userApi.createUser(userData);

  dispatch({
    type: CREATE_USER,
    payload: response.data
  });
};

export const createCrUser = (userData) => async (dispatch) => {
  const response = await userApi.createCrUser(userData);
  
  dispatch({
    type: CREATE_CR_USER,
    payload: response.data,
  })
};

export const checkAuthentication = () => async (dispatch) => {
  try {
    const {data} = await userApi.userDetails();
    dispatch({
    type: CHECK_AUTHENTICATION,
    payload:data,
    });
  }catch{
    dispatch({
      type: CHECK_AUTHENTICATION,
      payload:"Error",
      });
  }
};

export const loginUser = (values) => async (dispatch) => {
  try {
    const response = await userApi.loginUser(values);
    dispatch({
    type: LOGIN_USER,
    payload: response.data,
  });
  } catch(e) {
    dispatch({
      type: "LOGIN_ERROR",
      payload: e,
    })
  }
};

const loginAndAuthenticate = () => {
  try {
    
  } catch {
    
  }
}

