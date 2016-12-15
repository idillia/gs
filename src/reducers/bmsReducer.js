import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.bms_data, action) {
  switch(action.type) {
    case types.LOAD_BMS_SUCCESS: 
      return action.bms_data;     
    default:
      return state;
  }
}