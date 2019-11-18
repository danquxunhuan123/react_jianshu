import {CHANGE_SELECT, IS_SHOW_HISTORY} from './Constants'

const defaultState = {
    oldSelect: null,
    isShowHis: false,
}

const reducer = function todos(state = defaultState, action) {
    switch (action.type) {
        case IS_SHOW_HISTORY:
            return Object.assign({}, state, {
                isShowHis: action.isFocus,
            });
        case CHANGE_SELECT:
            return Object.assign({},state,{
                oldSelect: action.selectComponent,
            });
        default:
            return state;
    }
}

export default reducer;
