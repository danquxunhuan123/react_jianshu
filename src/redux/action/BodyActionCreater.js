import {LIST_DATA} from '../Constants';
import axios from 'axios';

const getList = (bodyList) => ({
    type: LIST_DATA,
    bodyList
})

export const getAsyList = (dispatch) => (
    axios.get('./data.json')
        .then((response) => dispatch(getList(response.data.bodyList))))
    .catch(function (error) {
        // handle error
        console.log(error);
    })

