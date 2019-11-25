import React from 'react';
import {BodyMiddleWrapper, BodyLeft, BodyRight} from "../../style/BodyStyle";
import {connect} from 'react-redux';
import {ListItem} from "./ListItem";
import {getAsyList} from '../../redux/action/BodyActionCreater';

class Body extends React.Component {

    componentDidMount(){
        this.props.dispatch(getAsyList);
    }

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

const mapStateToProps = (state) => ({
    bodyList: state.BodyReducer.bodyList
})

// const mapDispatchToProps = (dispatch) => {
//     function getListData(){
//         let listActions = getList(dispatch);
//         console.log(listActions);
//         // dispatch(listActions);
//     }
// }
export default connect(mapStateToProps)(Body);
