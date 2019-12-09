import React from 'react';
import {BodyMiddleWrapper, BodyLeft, Ul, Li, LiRightTop,Banner, AWithBanner, ImgBanner, ImgRight,
    BodyRight} from "../../style/BodyStyle";
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
        let bodyRight = this.props.bodyRight;
        // const {bodyList, bannerList} = this.props;
        return (
            <BodyMiddleWrapper>
                <BodyLeft>
                    <Banner autoplay>
                        {
                            bannerList.map((item, index) => (
                                <AWithBanner key={index} to="/focus">
                                    <ImgBanner img={item.pic}/>
                                </AWithBanner>
                            ))
                        }
                    </Banner>

                    <Ul>
                        {bodyList.map((item, index) =>
                            (
                                <Li key={index}>
                                    <ListItem item={item}/>
                                </Li>
                            )
                        )}
                    </Ul>
                </BodyLeft>
                <BodyRight>
                    <Ul>
                        {bodyRight.map((item, index) =>
                            (
                                <LiRightTop key={index}>
                                    <AWithBanner to="/focus">
                                        <ImgRight img={item.pic}/>
                                    </AWithBanner>
                                </LiRightTop>
                            )
                        )}
                    </Ul>
                </BodyRight>
            </BodyMiddleWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    bodyList: state.BodyReducer.bodyList,
    bannerList: state.BodyReducer.bannerList,
    bodyRight: state.BodyReducer.bodyRight
})

// const mapDispatchToProps = (dispatch) => {
//     function getListData(){
//         let listActions = getList(dispatch);
//         console.log(listActions);
//         // dispatch(listActions);
//     }
// }
export default connect(mapStateToProps)(Body);
