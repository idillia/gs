import * as types from './actionTypes';
import bmsApi from '../api/mockBmsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

//Function below is action creater func and types.LOAD_BMS_SUCCESS is an action
export function loadBmsSuccess(bms_data) {
  return {type: types.LOAD_BMS_SUCCESS, bms_data};
}

//Function below is a thunk it returns another function
export function loadBms() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return bmsApi.getAllBmsData().then(bms_data => {
      dispatch(loadBmsSuccess(bms_data));
    }).catch(error => {
      throw(error);
    });
  };
}



