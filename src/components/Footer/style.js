import styled from "styled-components";
import {ReactComponent as  location} from '../../assets/icons/location-icon.svg';
import {ReactComponent as phone} from '../../assets/icons/phone-icon.svg';
import {ReactComponent as email} from '../../assets/icons/email-icon.svg';
import {ReactComponent as facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as twitter} from '../../assets/icons/twitter.svg';
import {ReactComponent as instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as linkedin} from '../../assets/icons/linkedin.svg';

const Container = styled.div`
    background: var(--colorPrimary);
    height: 417px;
    width: 100%;
    margin-top: 96px;
    `;
const InnerContainer = styled.div`
    display: flex;
    max-width: 1440px;
    justify-content: space-between;
    margin: auto;
    padding: 48px 130px 24px 130px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 295px;
    width: 100%;
`;

Content.Title = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 32px;

`;
Content.Item = styled.div`
    display: flex;
    margin-bottom: 20px;
    color: #FFFFFF;
    font-size: 14px;

`;

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const Icon = styled.div`
`;
Icon.Location = styled(location)`
    width: 25px;
`;
Icon.Phone = styled(phone)`
    width: 25px;
`;
Icon.Email = styled(email)`
    width: 25px;
`;
Icon.Facebook = styled(facebook)`
    cursor: pointer;
    margin-top: 12px;
`;
Icon.Twitter = styled(twitter)`
    cursor: pointer;
    margin-top: 12px;    
`;
Icon.Instagram = styled(instagram)`
    cursor: pointer;
    margin-top: 12px;
`;
Icon.Linkedin = styled(linkedin)`
    cursor: pointer;
    margin-top: 12px;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin: 0 130px;
    max-width: 1440px;
    margin: auto;
    width: 100%;
    padding-top: 24px;
`;

export {Container, InnerContainer, Content, Icon, Wrapper, Bottom}