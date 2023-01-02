import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
const Container = styled.div`
width: 100%;
max-width: 380px;
min-width: 330px;
height: 430px;
background: #FFFFFF;
border: 1px solid #e6e9ec;
:hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06)) 
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06)) 
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
}
cursor: pointer;

`;

const Img = styled.img`
    width: 100%;
    max-height: 220px;
    min-height: 200px;
`;
const Content = styled.div`
    display: flex;
    flex-direction: ${({footer})=>footer?'row':'column'};
    justify-content: ${({footer})=>footer && 'space-between'};
    padding-top: 24px;
    padding: 16px 20px ;
    background: #FFFFFF;
`;
const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    `;

Details.Item =styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: ${({footerRow})=>footerRow?'row':'column'};
    align-items: ${({footer})=>!footer && 'center'};
`;

const Icons = styled.div``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
width: 25px;
height: 25px;
padding: 5px;

`;
Icons.Love = styled(love)`
width: 25px;
height: 25px;
padding: 5px;
border-radius: 50%;
background: ${({favorite})=>(favorite ? 'red':'#f6f8f9')};
margin-left: 20px;
cursor: pointer;
& path {
    fill: ${({favorite})=>favorite && 'white'}
}
:active{
    transform: scale(0.9);
}
`;

const Divider = styled.div`
   background: #E6E9EC;
   width: 100%;
    height: 1px;
`;
export {Container, Img, Content, Details, Icons,  Divider}