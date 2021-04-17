// Reducer for the timetable page
import { SET_TABLE_PAGE } from '../actions/actionTypes';

const initialState = {
    isTableOpen: false, //state to disable/enable the header when user is on timetable page
};

const timetableReducer = (state = initialState, action)=> {
    switch(action.type){
        case SET_TABLE_PAGE: 
          return {
        ...state, isTableOpen: !state.isTableOpen,
      }
    default:
      return state;
  }
}

export default timetableReducer;

  