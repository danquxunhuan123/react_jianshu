import React from 'react';
import {BodyMiddleWrapper, BodyLeft, BodyRight} from "../../style/BodyStyle";
import {connect} from 'react-redux';
import {ListItem} from "./ListItem";

class Body extends React.Component {

    render() {
        const list = this.props.bodyList;
        return (
            <BodyMiddleWrapper>
                <BodyLeft>
                    {list.map((item, index) =>
                        (
                            <ListItem key={index} item={item}/>
                        )
                    )}
                </BodyLeft>
                <BodyRight>
                </BodyRight>
            </BodyMiddleWrapper>
        );
    }
}

const mapState = (state) => ({
    bodyList: state.BodyReducer.bodyList
})
export default connect(mapState)(Body);
