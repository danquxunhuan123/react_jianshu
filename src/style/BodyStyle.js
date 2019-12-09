import styled from 'styled-components';
import {Carousel} from 'antd';
import {Link} from "react-router-dom";

export const BodyMiddleWrapper = styled.div`
    width: 960px;
    height:800px;
    margin:58px 15%;
    padding-top:30px;
`

/*******************************body左部分************************************/
export const BodyLeft = styled.div`
    padding-left:15px;
    width:640px;
    height:100%;
    float:left;
`
export const Ul = styled.ul`
    margin-top: -4px;
    width:100%;
    float:left;
`

export const Li = styled.li`
`

export const Banner = styled(Carousel).attrs({
    value:"bottom"
})`
    width:100%;
    height:270px;
`

export const ImgBanner = styled.img.attrs((props) => ({
    src: props.img,
}))`
    border-radius:15px;
    height:100%;
    width:100%;
`

// text-decoration:none;
export const AWithBanner = styled(Link)`
    
`
/*******************************body右部分************************************/
export const BodyRight = styled.div`
    width:280px;
    float:right;
`

export const ImgRight = styled.img.attrs((props) => ({
    src: props.img,
}))`
    border-radius:4px;
    height:50px;
    width:100%;
`

export const LiRightTop = styled.li`
    margin:0px 0px 6px;
`
