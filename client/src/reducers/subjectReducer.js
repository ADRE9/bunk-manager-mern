/* eslint-disable import/no-anonymous-default-export */
import { CREATE_SUBJECT_TEMPLATE,CREATING_SUBJECT,SUBJECT_CREATED,SUBJECT_LOADING,SUBJECT_LOADED, CLEAR_SUBJECTS, DELETING_SUBJECT, SUBJECT_DELETED } from '../actions/actionTypes';

const initialState = {
  isCreating: null,
  hasBeenCreated: null,
  isLoading: null,
  subjects:[]
};

export default (state=initialState,action) => {
  switch (action.type) {
    case CREATE_SUBJECT_TEMPLATE:
      return { ...state, ...action.payload };
    case CREATING_SUBJECT:
      return { ...state, isCreating: true };
    
    case SUBJECT_CREATED:
      return { ...state, isCreating: false, hasBeenCreated: true };
    
    case DELETING_SUBJECT:
    case SUBJECT_LOADING:
      return { ...state, isLoading: true };
    
    case SUBJECT_LOADED:
      return { ...state, isLoading: false, subjects: [...action.payload] };
    
    case SUBJECT_DELETED:
      return {...state,isLoading:false}
    
    case CLEAR_SUBJECTS:
      return {...state,subjects:[]};
    default: {
      return state;
    }
  }
};