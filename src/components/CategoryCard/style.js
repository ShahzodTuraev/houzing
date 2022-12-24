import styled from "styled-components";
const Container = styled.div`
width: 100%;
max-width: 280px;
min-width: 230px;
height: 100%;
max-height: 380px;
min-height: 350px;
background: #FFFFFF;   
border-radius: 3px;
filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06)) 
drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06)) 
drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
    width: 100%;
 
`;
const Content = styled.div`
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
    font-weight: 600;
    font-style: 18px;
    line-height: 28px;
 `;

const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);

    
    

 `;


const Icons = styled.div``;

export {Container, Img, Content,  Icons, Blur}