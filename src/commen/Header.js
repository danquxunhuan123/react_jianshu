import React from 'react';
import {Logo, HeaderWrapper, HeaderMiddleWrapper, SpanBg, Span, Aa, SouSuo, Beta} from './styles'

export default class Header extends React.Component {

    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <HeaderMiddleWrapper>
                    <SpanBg>
                        <Span>发现</Span>
                    </SpanBg>
                    <SpanBg>
                        <Span>关注</Span>
                    </SpanBg>
                    <SpanBg>
                        <Span>消息</Span>
                    </SpanBg>
                    <SouSuo/>

                    <Beta />
                    <Aa>Aa</Aa>
                </HeaderMiddleWrapper>
            </HeaderWrapper>
        )
    }

}
