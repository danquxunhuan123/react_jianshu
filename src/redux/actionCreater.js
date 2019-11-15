import {IS_SHOW_HISTORY,CHANGE_COLOR} from './Constants'
export const changeFocusShow = (isFocus) => ({
    type:IS_SHOW_HISTORY,
    isFocus
})
export const changeColor = () => ({
    type:CHANGE_COLOR,
})
