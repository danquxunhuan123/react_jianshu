import styled from 'styled-components';
import {Carousel} from 'antd';
import {Link} from "react-router-dom";

export const BodyMiddleWrapper = styled.div`
    width: 960px;
    height:800px;
    margin:58px 15%;
`
export const BodyLeft = styled.ul`
    padding-left:15px;
    width:640px;
    height:100%;
    float:left;
    padding-top:30px;
`

export const Banner = styled(Carousel).attrs({
    value:"bottom"
})`
    width:100%;
    background: #364d79;
    height:270px;
`

export const ImgBanner = styled.img.attrs((props) => ({
    src: props.img,
}))`
    height:100%;
    width:100%;
`

export const AWithBanner = styled(Link)`
    text-decoration:none;
`

export const BodyRight = styled.div`
    width:320px;
    height:100%;
    float:right;
`
