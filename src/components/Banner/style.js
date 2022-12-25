import styled from "styled-components";
const Container = styled.div`
    position: relative;
    height: fit-content;
`;



const Img = styled.img`
    width: 100%;`;

const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 5px;
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
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
    text-align: center;
    max-width: 566px;
    width: 100%;
    margin-bottom: 48px;
`;

export {Container,  Img, Blur, Contnet}