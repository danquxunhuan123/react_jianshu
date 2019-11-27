import React from 'react';
import {
    ItemWraper,
    ItemLeftWraper,
    Pic,
    Title,
    Context,
    ItemBottomWraper,
    Zuan,
    Author,
    CommentNum,
    AgreeNum
} from "../../style/ListItemStyle";

export function ListItem(props) {
    let item = props.item;
    return (
        <ItemWraper>
            <ItemLeftWraper>
                <Title to={`/detail/${item.id}`}>{item.title}</Title>
                <Context>{item.content}</Context>
                <ItemBottomWraper>
                    <Zuan>{item.zuanNum}</Zuan>
                    <Author>{item.author}</Author>
                    <CommentNum>{item.commentNum}</CommentNum>
                    <AgreeNum>{item.agreeNum}</AgreeNum>
                </ItemBottomWraper>
            </ItemLeftWraper>

            <Pic src={item.pic}/>
        </ItemWraper>
    )
}
