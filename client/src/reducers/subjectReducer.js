/* eslint-disable import/no-anonymous-default-export */
import { SUBJECT_TEMPLATE_CREATED, SUBJECT_CREATED, SUBJECT_LOADING, SUBJECT_LOADED,CREATING_SUBJECT, CLEAR_SUBJECTS, SUBJECT_DELETED, SUBJECT_UPDATED } from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  isCreating: null,
  hasBeenCreated: null,
  isLoading: null,
  subjects:{}
};

export default (state=initialState,action) => {
  switch (action.type) {
    case SUBJECT_TEMPLATE_CREATED: 
      return { ...state,isCreating:false,hasBeenCreated:true };
    
    case SUBJECT_CREATED:
      return { ...state,isLoading: false, isCreating: false, hasBeenCreated: true,subjects:{...state.subjects,[action.payload._id]:action.payload} };
    
    case SUBJECT_LOADING:
      return { ...state, isLoading: true };
    
      case CREATING_SUBJECT:
        return { ...state, isCreating: true };
    
    case SUBJECT_LOADED: {
      const subjectObj = _.mapKeys(action.payload , (value) => {
        return value._id;
      });
      return { ...state, isLoading: false, subjects: subjectObj };
    }
      
    case SUBJECT_UPDATED:
      return{...state,isLoading:false,subjects:{...state.subjects,[action.payload._id]:action.payload}}
    
    case SUBJECT_DELETED: {
      const newObjAfterDeletion=_.omit({...state.subjects},[action.payload._id])
      return {...state,isLoading:false,subjects:newObjAfterDeletion}
    }
    
    case CLEAR_SUBJECTS:
      return {...state,subjects:{}};
    default: {
      return state;
    }
  }
};