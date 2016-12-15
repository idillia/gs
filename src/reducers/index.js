import {combineReducers} from 'redux';
import bms from './bmsReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  bms,
  numAjaxCallsInProgress
});

export default rootReducer;