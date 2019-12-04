import {LIST_DATA} from '../Constants';

const defaultState = {
    bannerList:[],
    bodyList: []
}

const BodyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LIST_DATA:
            let listBanner = state.bannerList.concat(action.bannerList);
            let listBody = state.bodyList.concat(action.bodyList);
            return Object.assign({}, state, {
                bannerList: listBanner,
                bodyList: listBody
            });
        default:
            return state;
    }
}

export default BodyReducer;
