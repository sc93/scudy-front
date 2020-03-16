import {combineReducers} from 'redux';
import timer from './timer';
import data from './data';
const rootReducer = combineReducers({
    timer,
    data,
});
export default rootReducer;