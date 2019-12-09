import {LIST_DATA} from '../Constants';
import axios from 'axios';

const getList = (bodyList,bannerList,bodyRight) => ({
    type: LIST_DATA,
    bodyList,
    bannerList,
    bodyRight
})

export const getAsyList = (dispatch) => (
    axios.get('./data.json')
        .then((response) => {
            let data = response.data;
            dispatch(getList(data.bodyList,data.bannerList,data.bodyRight))
        }))
    .catch(function (error) {
        // handle error
        console.log(error);
    })

