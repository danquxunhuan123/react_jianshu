import React from 'react';
import {BodyMiddleWrapper, BodyLeft, Banner, AWithBanner, ImgBanner, BodyRight} from "../../style/BodyStyle";
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import {ListItem} from "./ListItem";
import {getAsyList} from '../../redux/action/BodyActionCreater';

class Body extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(getAsyList);
    }

    render() {
        let bodyList = this.props.bodyList;
        let bannerList = this.props.bannerList;
        // const {bodyList, bannerList} = this.props;
        return (
            <BodyMiddleWrapper>
                <BodyLeft>
                    <Banner autoplay>
                        {
                            bannerList.map((item, index) => (
                                <AWithBanner key={index}>
                                    <ImgBanner img={item.pic}/>
                                </AWithBanner>
                            ))
                        }
                    </Banner>

                    {bodyList.map((item, index) =>
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
    bodyList: state.BodyReducer.bodyList,
    bannerList: state.BodyReducer.bannerList
})

// const mapDispatchToProps = (dispatch) => {
//     function getListData(){
//         let listActions = getList(dispatch);
//         console.log(listActions);
//         // dispatch(listActions);
//     }
// }
export default connect(mapStateToProps)(Body);
