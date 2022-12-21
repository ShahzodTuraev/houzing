import styled from "styled-components";
import {ReactComponent as arrow} from '../../assets/icons/arrow.svg'
const Container = styled.div`
    position: relative;
    height: 571px;
`;

const Arrow = styled(arrow)`
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    padding: 18px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: ${({left}) =>(!left ? 'rotate(180deg)' : 'rotate(0deg)')};
    left: ${({left})=>left && '50px'};
    right: ${({left})=>!left && '20px'};
    cursor: pointer;
    :hover{
       background: rgba(255, 255, 255, 0.4);
    } 
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`;

const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
 `;

const Contnet = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
 `;
Contnet.Title = styled.h1`
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
`;
Contnet.Desc = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
Contnet.Price = styled.div`
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
`;
export {Container, Arrow, Img, Blur, Contnet}