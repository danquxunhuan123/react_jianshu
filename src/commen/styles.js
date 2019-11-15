import styled, {createGlobalStyle} from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.img.attrs(() => ({
    src: "//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
}))`
    float:left;
    height: 100%;
    width:100px;
`

export const HeaderMiddleWrapper = styled.div`
    display:inline-block;
    height:100%;
    width: 945px;
    margin:0px auto;
`

export const SearchHistory = styled.div`
    position:relative;
    top:0px;
    left:210px;
    border:1px solid #eee;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    width: 250px;
    border-radius:20px;
    padding:10px;
`


export const Beta = styled.img.attrs(() => ({
    src: "//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png"
}))`
    margin-top:16px;
    margin-left:20px;
    height: 25px;
    width:57px;
    float:right;
`

export const Aa = styled.i`
    float:right;   
    height:100%;
    font-size:18px;
    line-height:58px;
`

export const SpanBg = styled.a.attrs({
    href: '/',
})`
    float:left;
        height:100%;
        &:hover {
            background: #eeeeee;
        }
        text-align:center;
        width:64px;
        line-height:58px;
        text-decoration:none;
        font-size:17px;
        color:${props => props.defaultSelect ? 'red' : '#333333'};
`

export const SouSuo = styled.input.attrs({
    placeholder: '搜索',
    }
)`
    width:100px;
    height:38px;
    outline:none;
    line-height:38px;
    background:#eee;
    border-radius:40px;
    border:1px solid #eee;
    padding:0px 40px 0px 20px;
    margin:10px 0 10px 20px;
`

export const Img = styled.img.attrs({
    src:'//upload.jianshu.io/users/upload_avatars/8492960/dfaa03b1-9c44-439a-8b8b-4b455aacc83d?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
})`
    margin:9px 15px;
    width:40px;
    height:40px;
    float:right;
`

export const Button = styled.button`
    width:100px;
    background:#ea6f5a;
    border:1px solid #fff;
    font-size:15px;
    color:#fff;
    margin:9px 15px;
    border-radius:20px;
    height:38px;
    float:right;
`

export const Ul = styled.ul`
    list-style-image: url(${'../icon/clock.png'})
`

export const Li = styled.li`
    font-size: 18px;
    color: #787878;
    border-radius: 4px;
    padding:10px;
    &:hover {
            background: #f0f0f0;
        }
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
