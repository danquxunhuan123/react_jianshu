import {IS_SHOW_HISTORY,CHANGE_SELECT} from '../Constants'
export const changeFocusShow = (isFocus) => ({
    type:IS_SHOW_HISTORY,
    isFocus
})
export const changeSelect = (index) => ({
    type:CHANGE_SELECT,
    index
})
