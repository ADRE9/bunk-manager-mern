import { CREATE_SUBJECT_TEMPLATE,CREATING_SUBJECT,SUBJECT_CREATED,SUBJECT_LOADING,SUBJECT_LOADED,SUBJECT_FETCH_SUCCESS,SUBJECT_FETCH_ERROR } from './actionTypes';
import * as subjectApi from '../apis/subjectApi';
import { returnErrors, clearErrors } from './errorActions';
import { tokenConfig } from './authActions';



export const createSubjectTemplate = () =>async(dispatch,getState)=> {
  try {
    dispatch({type:CREATING_SUBJECT})
    const response = await subjectApi.createTemplate(tokenConfig(getState));
    dispatch(clearErrors());
    dispatch({ type: CREATE_SUBJECT_TEMPLATE, payload: response.data });
    dispatch({type:SUBJECT_CREATED})
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const getTemplateSubjects = () => async (dispatch, getState) => {
  const semester = getState().auth.user.currentSemester;
  try {
    dispatch({ type: SUBJECT_LOADING });
    const response = await subjectApi.getSubjectBySemester(semester, tokenConfig(getState));
    dispatch(clearErrors());
    await dispatch({type:SUBJECT_FETCH_SUCCESS,payload:response.data})
    dispatch({ type: SUBJECT_LOADED });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
}