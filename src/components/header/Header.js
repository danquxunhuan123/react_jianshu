import React from 'react';
import {
    Logo, HeaderWrapper, HeaderMiddleWrapper,
    Ul, Li, Img, ImgWraper, AWithBg, Button, SearchHistory, Aa, SouSuo, Beta
} from '../../style/HeaderStyle'
import {connect} from 'react-redux';
import {changeFocusShow, changeSelect} from '../../redux/action/HeaderActionCreater'

const his = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.changeFocusState = this.changeFocusState.bind(this);
        this.changeSelectColor = this.changeSelectColor.bind(this);

    }

    changeSelectColor(index){
        if (index === this.props.oldSelectIndex) return;
        this.props.dispatch(changeSelect(index));
    }

    changeFocusState(isShowHis) {
        const changFocus = changeFocusShow(isShowHis);
        this.props.dispatch(changFocus);
    }

    render() {
        let select = this.props.isSelect;
        return (
            <HeaderWrapper>
                <Logo/>
                <HeaderMiddleWrapper>
                    <AWithBg
                        onClick={() => this.changeSelectColor(0)}
                        selBackground={select[0]}
                        selColor={select[0]}
                    >
                        发现
                    </AWithBg>
                    <AWithBg
                        onClick={() => this.changeSelectColor(1)}
                        selBackground={select[1]}
                        selColor={select[1]}
                    >

                        关注
                    </AWithBg>
                    <AWithBg
                        onClick={() => this.changeSelectColor(2)}
                        selBackground={select[2]}
                        selColor={select[2]}
                    >
                        消息
                    </AWithBg>

                    <SouSuo
                        onFocus={() => this.changeFocusState(true)}
                        onBlur={() => this.changeFocusState(false)}
                    />

                    <Beta/>
                    <Aa>Aa</Aa>

                    {
                        this.props.isShowHis ? <SearchHistory>
                            <Ul>
                                {
                                    his.map((item, index) => (<Li key={index}>{item}</Li>))
                                }
                            </Ul>
                        </SearchHistory> : null
                    }

                </HeaderMiddleWrapper>
                <Button>写文章</Button>
                <ImgWraper>
                    <Img/>
                </ImgWraper>
            </HeaderWrapper>
        )
    }
}

const mapState = (state) => ({
    oldSelectIndex: state.HeaderReducer.oldSelectIndex,
    isShowHis: state.HeaderReducer.isShowHis,
    isSelect: state.HeaderReducer.isSelect
});

export default connect(mapState)(Header);
