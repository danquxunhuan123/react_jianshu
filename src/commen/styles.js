import styled, {createGlobalStyle} from 'styled-components'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom:1px solid #f0f0f0;
`
export const HeaderMiddleWrapper = styled.div`
    width: 945px;
    line-height:56px;
    height: 100%;
    margin: 0px auto;
`

export const Logo = styled.img.attrs(() => ({
    src: "//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"}))`
    height: 100%;
    float:left;
    width:100px;
`

export const Beta = styled.img.attrs(() => ({
    src: "//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png"}))`
    height: 25px;
    width:57px;
    margin:15.5px 0px 15.5px 20px;
    float:right;
`

export const Aa = styled.i`
        font-size:inherit;
        font-family:iconfont!important;
        font-weight:400!important;
    float:right;    
`

export const SpanBg = styled.a.attrs({
    href:'/',
})`
        &:hover {
            background: #eeeeee;
        }
        text-align:center;
        display:inline-block;
        width:64px;
        height:58px;
        text-decoration:none;
        font-size:17px;
        color:#333333;
`
export const Span = styled.span`
    font-size:17px;
    color:#333333;
`

export const SouSuo = styled.input.attrs({
    placeholder:'搜索'
})`
    outline:none;
    padding:0 40px 0 20px;
    margin-left:20px;
    width:100px;
    height:38px;
    background:#eee;
    border-radius:40px;
    border:1px solid #eee
`


export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`
