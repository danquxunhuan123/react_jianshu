import React from 'react';
import {DetailWraper, H1} from "../../style/DetailStyle";
import {useParams} from 'react-router-dom';

function Detail() {
    let { id } = useParams();
    return (
        <DetailWraper>
            <H1>{id}</H1>
        </DetailWraper>
    );
}

export default Detail;
