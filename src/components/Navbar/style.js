import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as logoImg} from '../../assets/icons/logo.svg';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Main = styled.div`
    display: flex;
    justify-content: center;
    background: var(--colorPrimary);
    position: sticky;
    top: 0;
    z-index: 1;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffff;
    padding: var(--padding);
    height: 64px;
    font-size: 16px;
    max-width: 1440px;
    width: 100%;
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    cursor: ${({logo})=>logo && 'pointer'};
    .active{
        color: #b8ff06;
    };

`;

const Logo = styled(logoImg)`
    width: 30px;
    margin-right: 12px;
& path{
    fill: #ffff;
}
`;

const Link = styled(NavLink)`
    text-decoration: none;
    color: #ffff;
    padding: 0 32px;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 177px;
    border-radius: 5px;
    background: #FFFFFF;
    padding: 16px;
    gap: 16px;
    box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    `;
Menu.Item = styled.div`
    font-weight: 400;
    font-style: 14px;
    line-height: 20px;
    color: #000000;
    :hover {
        background-color: #f9f9f9;
    }
`;


export {Container, Menu, Wrapper, Section, Logo, Link, Main}
