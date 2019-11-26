import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducer/Reducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer,
    applyMiddleware(thunk));
