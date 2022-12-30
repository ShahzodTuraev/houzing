import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as rate } from "../../assets/icons/rate.svg";
import { ReactComponent as rate90 } from "../../assets/icons/rate90.svg";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    flex: ${({flex})=> flex};
    `;
const Wrapper = styled.div`
    display: flex;
    padding: var(--padding);
    max-width: 1440px;
    margin: auto;
    width: 100%;
`;
const Content = styled.div`
    display: flex;
    justify-content: ${({even})=>even ? 'space-evenly': 'space-between'} ;
    align-items: ${({none}) => !none && 'center'};
    cursor: ${({pointer}) => pointer && 'pointer'};
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;
const Details = styled.div`
    display: flex;
    margin-top: 32px;
`;

Details.Title = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin: 0 24px 0 8px;
`;

const Icons = styled.div``;
Icons.Share = styled(share)`
    display: flex;
    width: 45px;
    height: 45px;
    padding: 2px;
    border-radius: 10px;
    background: #F6F8F9;
`;
Icons.Love = styled(love)`
    width: 35px;
    height: 35px;
    padding: 10px;
    margin: 10px;
    background: #F6F8F9;
    border-radius: 50%;
    :active{
        transform: scale(0.9);
    }
`;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;
Icons.Rate = styled(rate)`
    margin: 0 15px 0 auto;
`;
Icons.Rate90 = styled(rate90)`
    margin: 0 15px 0 auto;
`;

const Description = styled.div`
    color: #696969;
    text-align: justify;
    display: flex;
    margin-right: ${({mr}) => mr && '10px'};
`;
Description.Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-top: 48px;
    margin-bottom: ${({mb})=>(mb? '16px': '24px')};
`;
const Message = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: 14px;
    padding: 24px;
    gap: 24px;
`;
const User = styled.div``;
User.Img = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
`;

const Line = styled.div`
    border-top: 1px solid #E6E9EC;
    width: 100%;
    margin-top: 48px;
`;
const ImageContainer = styled.div`
  display: flex;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 24px;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
`;

ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;
ImageContainer.Subimg = styled.img`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;

const Blur = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: bold;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;
Blur.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;
export {
    Blur,
    ImgContainer,
    ImageContainer,
    Container, 
    Wrapper, 
    Message, 
    Content, 
    Section, 
    Details, 
    Icons, 
    Description,
    User,
    Line,
}