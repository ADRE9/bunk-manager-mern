/* eslint-disable import/no-anonymous-default-export */
import {
  SUBJECT_TEMPLATE_CREATED,
  SUBJECT_CREATED,
  SUBJECT_LOADING,
  SUBJECT_LOADED,
  CREATING_SUBJECT,
  CLEAR_SUBJECTS,
  SUBJECT_DELETED,
  SUBJECT_UPDATED,
  UPDATING_SUBJECT,
  CLEAR_EVENTS,
  LOADING_SEMESTER,
  SEMESTER_LOADED,
  CLICKED_ADD_SUBJECT,
} from "../actions/actionTypes";
import _ from "lodash";

const initialState = {
  isCreating: false,
  hasBeenCreated: false,
  isUpdating: false,
  hasBeenUpdated: false,
  isLoading: null,
  semester: {},
  subjects: {},
  clicked: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBJECT_TEMPLATE_CREATED:
      return { ...state, isCreating: false, hasBeenCreated: true };

    case SUBJECT_CREATED:
      return {
        ...state,
        isCreating: false,
        hasBeenCreated: true,
        subjects: { ...state.subjects, [action.payload._id]: action.payload },
      };

    case SUBJECT_LOADING:
      return { ...state, isLoading: true };

    case CREATING_SUBJECT:
      return { ...state, isCreating: true };

    case SUBJECT_LOADED: {
      const subjectObj = _.mapKeys(action.payload, (value) => {
        return value._id;
      });
      return { ...state, isLoading: false, subjects: subjectObj };
    }

    case LOADING_SEMESTER:
      return { ...state, isLoading: true };

    case SEMESTER_LOADED: {
      let newObj = _.mapKeys(action.payload, (value) => {
        return value._id;
      });
      return { ...state, isLoading: false, semester: { ...newObj } };
    }

    case UPDATING_SUBJECT:
      return { ...state, isUpdating: true };

    case SUBJECT_UPDATED:
      return {
        ...state,
        isUpdating: false,
        hasBeenUpdated: true,
        subjects: { ...state.subjects, [action.payload._id]: action.payload },
      };

    case SUBJECT_DELETED: {
      const newObjAfterDeletion = _.omit({ ...state.subjects }, [
        action.payload._id,
      ]);
      return { ...state, isLoading: false, subjects: newObjAfterDeletion };
    }

    case CLEAR_EVENTS:
      return {
        ...state,
        isCreating: false,
        hasBeenCreated: false,
        isUpdating: false,
        hasBeenUpdated: false,
        isLoading: false,
      };

    case CLEAR_SUBJECTS:
      return { ...state, subjects: {} };

    case CLICKED_ADD_SUBJECT:
      return { ...state, clicked: !state.clicked };

    default: {
      return state;
    }
  }
};
