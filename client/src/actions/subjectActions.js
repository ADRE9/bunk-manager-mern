import { CREATE_SUBJECT_TEMPLATE } from './actionTypes';
import * as subjectApi from '../apis/subjectApi';
import { returnErrors, clearErrors } from './errorActions';
import { tokenConfig } from './authActions';

export const createSubjectTemplate = () =>async(dispatch,getState)=> {
  try {
    const response = await subjectApi.createTemplate(tokenConfig(getState));
    dispatch(clearErrors());
    dispatch({type:CREATE_SUBJECT_TEMPLATE,payload:response.data})
  } catch (error) {
    dispatch(returnErrors(error.response.data,error.response.status))
  }
};