import {LIST_DATA} from '../Constants';

const defaultState = {
    bodyList: []
}

const BodyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LIST_DATA:
            let list = state.bodyList.concat();
            list = [];
            let concatList = list.concat(action.bodyList);
            return Object.assign({}, state, {
                bodyList: concatList
            });
        default:
            return state;
    }
}

export default BodyReducer;
