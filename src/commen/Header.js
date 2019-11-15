import React from 'react';
import {Logo, HeaderWrapper, HeaderMiddleWrapper,
    Ul,Li,Img,SpanBg,Button, SearchHistory, Aa, SouSuo, Beta} from './styles'
import {connect} from 'react-redux';
import {changeFocusShow} from '../redux/actionCreater'

const his = ['aaa','bbb','ccc','ddd','eee'];

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.changeFocusState = this.changeFocusState.bind(this);
        this.changeSelectColor = this.changeSelectColor.bind(this);
    }

    changeSelectColor(e) {
        console.log(e);
        // const changFocus = changeColor();
        // this.props.dispatch(changFocus);
    }

    changeFocusState(isShowHis) {
        const changFocus = changeFocusShow(isShowHis);
        this.props.dispatch(changFocus);
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <HeaderMiddleWrapper>
                    <SpanBg
                        onMouseOver={(e) => this.changeSelectColor(e)}
                        onClick={(e) => this.changeSelectColor(e)}
                    >
                        发现
                    </SpanBg>
                    <SpanBg onClick={() => this.changeSelectColor()}>
                        关注
                    </SpanBg>
                    <SpanBg onClick={() => this.changeSelectColor()}>
                        消息
                    </SpanBg>

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
                                    his.map((item,index) => (<Li key={index}>{item}</Li>))
                                }
                            </Ul>
                        </SearchHistory> : null
                    }

                </HeaderMiddleWrapper>
                <Button>写文章</Button>
                <Img />
            </HeaderWrapper>
        )
    }
}

const mapState = (state) => ({
    isShowHis: state.isShowHis,
    currentSelect: state.currentSelect
});

export default connect(mapState)(Header)
