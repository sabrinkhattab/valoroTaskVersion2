import {getData} from '../reducers/getData/index';
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    Data :getData
});


export default rootReducer;
