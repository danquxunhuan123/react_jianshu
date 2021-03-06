import React from 'react';
import {
    Logo, HeaderMiddleWrapper,
    Ul, Li, Img, ImgWraper, AWithBg, Button, SearchHistory, Aa, SouSuo, Beta, HeaderFixedWraper
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

    changeSelectColor(index) {
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
            <HeaderFixedWraper>
                <Logo/>
                <HeaderMiddleWrapper>
                    <AWithBg
                        onClick={() => this.changeSelectColor(0)}
                        selbackground={select[0].toString()}
                        selcolor={select[0].toString()}
                        to="/find"
                    >
                        发现
                    </AWithBg>
                    <AWithBg
                        onClick={() => this.changeSelectColor(1)}
                        selbackground={select[1].toString()}
                        selcolor={select[1].toString()}
                        to="/focus"
                    >
                        关注
                    </AWithBg>
                    <AWithBg
                        onClick={() => this.changeSelectColor(2)}
                        selbackground={select[2].toString()}
                        selcolor={select[2].toString()}
                        to="/news"
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
            </HeaderFixedWraper>
        )
    }
}

const mapState = (state) => ({
    oldSelectIndex: state.HeaderReducer.oldSelectIndex,
    isShowHis: state.HeaderReducer.isShowHis,
    isSelect: state.HeaderReducer.isSelect
});

export default connect(mapState)(Header);
