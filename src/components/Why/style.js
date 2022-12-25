import styled from "styled-components";
import {ReactComponent as  message} from '../../assets/icons/message.svg';
import {ReactComponent as home} from '../../assets/icons/home.svg';
import {ReactComponent as calculator} from '../../assets/icons/calculator.svg';
import {ReactComponent as maps} from '../../assets/icons/maps.svg';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: auto;
    padding: 48px 0px;
    width: 100%;
    background: #F5F7FC;
`;
const HeadContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    max-width: 235px;
    width: 100%;
    text-align: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    padding: 0 130px;
    margin-top: 40px;
    height: 230px;
`;
const Icon = styled.div``;
Icon.Message = styled(message)`
    margin-bottom: 24px;
`;
Icon.Home = styled(home)`
    margin-bottom: 24px;
`;
Icon.Calculator = styled(calculator)`
    margin-bottom: 24px;
`;
Icon.Maps = styled(maps)`
    margin-bottom: 24px;
`;

export {Container, HeadContent, Content, Wrapper, Icon}