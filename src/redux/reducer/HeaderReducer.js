import {CHANGE_SELECT, IS_SHOW_HISTORY} from '../Constants'

const defaultState = {
    oldSelectIndex: 0,
    isSelect: [true, false, false],
    isShowHis: false,
}

export const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_SHOW_HISTORY:
            return Object.assign({}, state, {
                isShowHis: action.isFocus,
            });
        case CHANGE_SELECT:
            let isSel = state.isSelect.concat();
            isSel[state.oldSelectIndex] = false;
            isSel[action.index] = true;

            return Object.assign({}, state, {
                oldSelectIndex:action.index,
                isSelect: isSel,
            });
        default:
            return state;
    }
}

export default headerReducer;
