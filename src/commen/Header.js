import React from 'react';
import {
    Logo, HeaderWrapper, HeaderMiddleWrapper,
    Ul, Li, Img, SpanBg, Button, SearchHistory, Aa, SouSuo, Beta
} from './styles'
import {connect} from 'react-redux';
import {changeFocusShow, changeSelect} from '../redux/actionCreater'

const his = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.faXian = React.createRef();
        this.guanZhu = React.createRef();
        this.xiaoXi = React.createRef();
        this.changeFocusState = this.changeFocusState.bind(this);
        this.changeSelectColor = this.changeSelectColor.bind(this);
    }

    componentDidMount() {
        let firstSelect = this.faXian.current;
        firstSelect.style.background = 'none';
        firstSelect.style.color = '#ea6f5a';
        this.props.dispatch(changeSelect(firstSelect));
    }

    changeSelectColor(selectComponet) {
        let currentNode = selectComponet.current;
        let oldNode = this.props.oldSelect;
        if (currentNode.innerHTML === oldNode.innerHTML) return;
        currentNode.style.color = '#ea6f5a';
        currentNode.style.background = 'none';
        // currentNode.onmouseover(this.changeEvent(currentNode));
        oldNode.style.color = '#333333';
        // oldNode.style.background = '#none';
        // oldNode.onmouseover(() => {
        //     oldNode.style.background = '#eeeeee';
        // });
        this.props.dispatch(changeSelect(currentNode));
        // console.log(currentNode.attrs);
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
                        ref={this.faXian}
                        onClick={() => this.changeSelectColor(this.faXian)}
                    >
                        发现
                    </SpanBg>
                    <SpanBg
                        ref={this.guanZhu}
                        onClick={() => this.changeSelectColor(this.guanZhu)}>
                        关注
                    </SpanBg>
                    <SpanBg
                        ref={this.xiaoXi}
                        onClick={() => this.changeSelectColor(this.xiaoXi)}>
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
                                    his.map((item, index) => (<Li key={index}>{item}</Li>))
                                }
                            </Ul>
                        </SearchHistory> : null
                    }

                </HeaderMiddleWrapper>
                <Button>写文章</Button>
                <Img/>
            </HeaderWrapper>
        )
    }
}

const mapState = (state) => ({
    isShowHis: state.isShowHis,
    oldSelect: state.oldSelect
});

export default connect(mapState)(Header)
