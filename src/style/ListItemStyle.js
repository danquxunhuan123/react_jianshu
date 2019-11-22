import styled from 'styled-components';

export const ItemWraper = styled.div`
    width:100%;
    padding:20px 0;
    border-bottom: 1px solid #f0f0f0;
    float:left;
`

export const Pic = styled.img.attrs((props) => ({
        src: props.src,
    })
)`
    display:${props => props.src ? 'block' : 'none'}
    width:150px;
    height:100px;
    float:right;
`

export const ItemLeftWraper = styled.div`
    width:458px;
    float:left;
`

export const Title = styled.a`
    color: #2f2f2f;
    font-size: 18px;
    font-weight: 700;
`

export const Context = styled.p`
    font-size: 13px;
    color: #999;
    margin:10px 0;
    line-height:24px;
`

export const ItemBottomWraper = styled.div`
    width:100%;
    margin:0 0 20px 0;
`

export const Zuan = styled.a`
    float:left;
    font-size: 12px;
    color: #ea6f5a;
    margin:0 10px 0 0;
`

export const Author = styled.a`
    float:left;
    font-size: 12px;
    color: #b4b4b4;
    margin:0 10px 0 0;
`

export const CommentNum = styled.a`
    float:left;
    font-size: 12px;
    color: #b4b4b4;
    margin:0 10px 0 0;
`

export const AgreeNum = styled.span`
    float:left;
    font-size: 12px;
    color: #b4b4b4;
`
