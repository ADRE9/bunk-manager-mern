import { CREATING_ATTENDANCE, ATTENDANCE_CREATED, DELETING_ATTENDANCE, ATTENDANCE_DELETED, UPDATING_ATTENDANCE, ATTENDANCE_UPDATED, LOADING_ATTENDANCE, ATTENDANCE_LOADED, CLEAR_ATTENDANCE } from './actionTypes';
import * as attendanceApi from '../apis/attendanceApi';
import { clearErrors, returnErrors } from './errorActions';
import {tokenConfig} from './authActions'

export const createAttendance = (data,id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATING_ATTENDANCE });
    const response = await attendanceApi.post(tokenConfig(getState), data,id);
  } catch (e) {
    
  }
}