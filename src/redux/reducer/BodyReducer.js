import {LIST_DATA} from '../Constants';

const defaultState = {
    bodyList: []
}

const BodyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LIST_DATA:
            return Object.assign({}, state, {
                bodyList: state.bodyList.concat(action.bodyList)
            });
        default:
            return state;
    }
}

export default BodyReducer;
