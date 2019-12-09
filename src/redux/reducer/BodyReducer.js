import {LIST_DATA} from '../Constants';

const defaultState = {
    page: 0,
    bannerList: [],
    bodyList: [],
    bodyRight: []
}

const BodyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LIST_DATA:
            state.bannerList = [];
            state.bodyList = [];
            state.bodyRight = [];
            let listBanner = state.bannerList.concat(action.bannerList);
            let listBody = state.bodyList.concat(action.bodyList);
            let bodyRight = state.bodyRight.concat(action.bodyRight);

            return Object.assign({}, state, {
                bannerList: listBanner,
                bodyList: listBody,
                bodyRight: bodyRight
            });
        default:
            return state;
    }
}

export default BodyReducer;
