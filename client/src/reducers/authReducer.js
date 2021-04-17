/* eslint-disable import/no-anonymous-default-export */
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  DELETING_USER,
  USER_DELETED,
  UPDATING_USER,
  USER_UPDATED,
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //when user starts loading
    case DELETING_USER:
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    //when user finishes loading
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        ...action.payload,
      };

    case UPDATING_USER:
      return { ...state, isLoading: true };

    case USER_UPDATED: {
      return { ...state, user: { ...action.payload } };
    }
    //when user gets authenticated through login or signup
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    }

    //when any error occcurs
    case AUTH_ERROR:
    case USER_DELETED:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
