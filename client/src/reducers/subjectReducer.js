/* eslint-disable import/no-anonymous-default-export */
import { CREATE_SUBJECT_TEMPLATE, SUBJECT_CREATED, SUBJECT_LOADING, SUBJECT_LOADED, CLEAR_SUBJECTS, SUBJECT_DELETED } from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  isCreating: null,
  hasBeenCreated: null,
  isLoading: null,
  subjects:{}
};

export default (state=initialState,action) => {
  switch (action.type) {
    case CREATE_SUBJECT_TEMPLATE: {
      const subjectObj = _.mapKeys(action.payload , (value) => {
        return value._id;
      });
      return { ...state, subjectObj };
    }
    
    case SUBJECT_CREATED:
      return { ...state, isCreating: false, hasBeenCreated: true };
    
    case SUBJECT_LOADING:
      return { ...state, isLoading: true };
    
    case SUBJECT_LOADED: {
      const subjectObj = _.mapKeys(action.payload , (value) => {
        return value._id;
      });
      return { ...state, isLoading: false, subjects: subjectObj };
    }
    
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