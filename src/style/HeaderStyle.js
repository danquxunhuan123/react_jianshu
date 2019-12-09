import styled from 'styled-components'
import {Link} from "react-router-dom";
import pan from '../icons/pan.png';
import logo from '../icons/logo.png';
import clock from '../icons/clock.png';

/******************头部背景*******************/
export const HeaderFixedWraper = styled.div`
    position:fixed;
    width:100%;
    height: 58px;
    top:0px;
    left:0px;
    background:white;
    border-bottom:1px solid #f0f0f0;
    z-index:1;
`
/******************头部left*******************/
export const Logo = styled.img.attrs(() => ({
    src: logo,
}))`
    float:left;
    height: 100%;
    width:100px;
`
/******************头部中间*******************/
export const HeaderMiddleWrapper = styled.div`
    float:left;
    position:relative;
    height:100%;
    width: 65%;
    margin:0px 0 0 8%;
`

export const AWithBg = styled(Link)`
    float:left;
    height:100%;
    &:hover {
        background: ${props => props.selbackground === 'true' ? 'none' : '#eeeeee'}; 
        color:${props => props.selcolor === 'true' ? '#ea6f5a' : '#333333'};
    }
        color:${props => props.selcolor === 'true' ? '#ea6f5a' : '#333333'};
        text-align:center;
        width:64px;
        line-height:58px;
        text-decoration:none;
        font-size:17px;
`

export const SouSuo = styled.input.attrs({
        placeholder: '搜索',
    }
)`
    width:160px;
    height:38px;
    outline:none;
    line-height:38px;
    background:#eee;
    border-radius:40px;
    border:1px solid #eee;
    padding:0px 40px 0px 20px;
    margin:10px 0 10px 20px;
`

export const Beta = styled.img.attrs(() => ({
    src: "//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png"
}))`
    float:right; 
    margin:16px 25px 0 20px;
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
/******************头部right*******************/
export const ImgWraper = styled.a`
    &:hover {
        background:#eee; 
    }
    text-align:center;
    width:80px;
    height:100%;
    float:right;
`
export const Img = styled.img.attrs({
    src: '//upload.jianshu.io/users/upload_avatars/8492960/dfaa03b1-9c44-439a-8b8b-4b455aacc83d?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
})`
    width:40px;
    height:40px;
    margin-top:8px;
    border:1px solid #eee;
    border-radius:100px;
`

export const Button = styled.a`
    &:hover {
        color:#fff;
    }
    &::before{
        position:relative;
        top:4px;
        margin-right:2px;
        display:inline-block;
        content:url(${pan});
    }
    width:100px;
    height:42px;
    background:#ea6f5a;
    border:1px solid #fff;
    font-size:15px;
    color:#fff;
    margin:7px 15px;
    text-align:center;
    border-radius:20px;
    line-height:36px;
    outline:none;
    float:right;
`

/******************头部历史纪录*******************/
export const SearchHistory = styled.div`
    position:relative;
    top:0px;
    left:210px;
    border:1px solid #eee;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    width: 250px;
    border-radius:4px;
    padding:5px;
    background:white;
`

export const Ul = styled.ul`
`

export const Li = styled.li`
    font-size: 18px;
    height:40px;
    width:240px;
    color: #787878;
    border-radius: 4px;
    line-height:40px;
    &:hover {
            background: #f0f0f0;
        }
    &::before{
        position:relative;
        top:4px;
        margin:0px 10px;
        display:inline-block;
        content:url(${clock});
    }
`
