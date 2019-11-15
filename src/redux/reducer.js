import {CHANGE_COLOR, IS_SHOW_HISTORY} from './Constants'

const defaultState = {
    oldSelect:false,
    currentSelect: true,
    isShowHis: false,
}

const reducer = function todos(state = defaultState, action) {
    switch (action.type) {
        case IS_SHOW_HISTORY:
            return {
                oldSelect:false,
                currentSelect: true,
                isShowHis: action.isFocus,
            };
        case CHANGE_COLOR:
            return {
                oldSelect:false,
                currentSelect: true,
                isShowHis: action.isFocus,
            };
        default:
            return state;
    }
}

export default reducer;
