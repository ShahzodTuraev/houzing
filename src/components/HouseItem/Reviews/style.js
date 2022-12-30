import styled from "styled-components";
import { ReactComponent as rate } from "../../../assets/icons/rate.svg";
import { ReactComponent as rate90 } from "../../../assets/icons/rate90.svg";
import { ReactComponent as star } from "../../../assets/icons/star.svg";

const Container = styled.div`
    display: flex;
    justify-content: ${({sb})=>sb ? 'space-between': 'flex-start'} ;
    align-items: center;
    margin-left: ${({ml})=>ml && '32px'};
    `;
    const Containerr = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({gap})=>gap ? '4px' : '24px'} ;
    align-items: flex-start;
    /* flex: ${({flex})=> flex}; */
    max-width: ${({width})=>width && '380px'};
    width: 100%;
`;


const Icons = styled.div``;
Icons.Rate = styled(rate)`
    margin:8px 16px 8px 50px;
`;
Icons.Rate90 = styled(rate90)`
    margin:10px 16px 10px 50px;
`;
Icons.Star = styled(star)`
    width: 12px;
    height: 12px;
    margin-right: 5px;
`;

const User = styled.div``;
User.Img = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-bottom: 10px;
`;
export {Container, Containerr, Wrapper, User, Icons};