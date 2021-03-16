import { SUBJECT_TEMPLATE_CREATED,CREATING_SUBJECT,SUBJECT_CREATED,SUBJECT_LOADING,SUBJECT_LOADED,SUBJECT_DELETED,UPDATING_SUBJECT, SUBJECT_UPDATED,CLEAR_EVENTS,LOADING_SEMESTER,SEMESTER_LOADED } from './actionTypes';
import * as subjectApi from '../apis/subjectApi';
import { returnErrors, clearErrors } from './errorActions';
import {history} from '../helpers/history';
import { updateUserData } from './authActions';
import { tokenConfig } from './authActions';



export const createSubjectTemplate = () => async (dispatch, getState) => {
  const semester=getState().auth.user.currentSemester;
  try {
    dispatch({type:CREATING_SUBJECT})
    await subjectApi.createTemplate(tokenConfig(getState),semester);
    dispatch(clearErrors());
    dispatch({ type: SUBJECT_TEMPLATE_CREATED});
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const getCurrentSemesterSubjects = () => async (dispatch, getState) => {
  const semester = getState().auth.user.currentSemester;
  try {
    dispatch({ type: SUBJECT_LOADING });
    const response = await subjectApi.getSubjectBySemester(semester, tokenConfig(getState));
    dispatch(clearErrors());
    await dispatch({ type: SUBJECT_LOADED, payload: response.data })
  } catch (error) {
    await dispatch(returnErrors(error.response, error.response));
  }
};

export const deleteSubject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SUBJECT_LOADING });
    const response = await subjectApi.deleteSubject(tokenConfig(getState), id);
    dispatch(clearErrors());
    dispatch({ type: SUBJECT_DELETED, payload: response.data });
  } catch (error) {
    await dispatch(returnErrors(error.response, error.response));
  }
};

export const updateSubject = (data, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATING_SUBJECT });
    const response = await subjectApi.updateSubject(tokenConfig(getState), data, id);
    dispatch(clearErrors());
    await dispatch({ type: SUBJECT_UPDATED, payload: response.data })
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const createActiveSubject = (values) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATING_SUBJECT });
    const response=await subjectApi.createSubject(tokenConfig(getState), values);
    dispatch(clearErrors());
    dispatch({ type: SUBJECT_CREATED,payload:response.data });
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const getSubjectsBySemester = (semester) => async (dispatch, getState) => {
  try {
    dispatch({ type: SUBJECT_LOADING });
    const response = await subjectApi.getSubjectBySemester(semester, tokenConfig(getState));
    dispatch(clearErrors());
    await dispatch({ type: SUBJECT_LOADED, payload: response.data })
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const createNewSemester = () => async (dispatch, getState) => {
  let semester = getState().auth.user.currentSemester;
  try {
    dispatch({ type: SUBJECT_LOADING });
    await subjectApi.deactivateAllSubject(tokenConfig(getState), semester);
    await dispatch(updateUserData({ currentSemester: semester + 1 }));
    await subjectApi.createTemplate(tokenConfig(getState), semester + 1);
    dispatch(clearErrors());
    dispatch({ type: SUBJECT_TEMPLATE_CREATED });
    await dispatch(getSubjectsBySemester(semester + 1));
    await dispatch(getAllSemesters());
    history.push('/');
  } catch (error) {
    await dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const getAllSemesters = () =>async(dispatch,getState)=> {
  try {
    dispatch({ type: LOADING_SEMESTER });
    const response = await subjectApi.getAllSemesters(tokenConfig(getState));
    dispatch({type:SEMESTER_LOADED,payload:response.data})
  } catch(error) {
    await dispatch(returnErrors(error.response, error.response));
  }
}

export const clearEvents = () => {
  return {type:CLEAR_EVENTS}
}