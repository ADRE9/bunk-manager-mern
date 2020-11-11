import * as userApi from '../apis/userApi';
import {CREATE_USER,CREATE_CR_USER, LOGIN_USER } from './actionTypes';

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

export const loginUser = (values) => async (dispatch) => {
  const response = await userApi.loginUser(values);

  dispatch({
    type: LOGIN_USER,
    payload:response.data,
  });
}
