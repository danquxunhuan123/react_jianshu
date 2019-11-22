import {combineReducers} from "redux";
import HeaderReducer from './HeaderReducer';
import BodyReducer from './BodyReducer';

export const rootReducer = combineReducers({
    HeaderReducer,
    BodyReducer,
});
