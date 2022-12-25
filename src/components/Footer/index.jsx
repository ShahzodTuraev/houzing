import React from 'react';
import { Container, InnerContainer, Content, Icon, Wrapper, Bottom} from './style';
 export const Footer = () => {
  return (
    <Container>
      <InnerContainer>
          <Content>
            <Content.Title>General</Content.Title>
            <Content.Item>About Us</Content.Item>
            <Content.Item>Terms & Conditions</Content.Item>
            <Content.Item>Support Center</Content.Item>
            <Content.Item>Contact Us</Content.Item>
          </Content>
          <Content>
           <Content.Title>Discover</Content.Title>
            <Content.Item>Chicago</Content.Item>
            <Content.Item>Los Angeles</Content.Item>
            <Content.Item>Miami</Content.Item>
            <Content.Item>New York</Content.Item>
          </Content>
          <Content>
            <Content.Title>Lists by Category</Content.Title>
            <Content.Item>Apartments</Content.Item>
            <Content.Item>Condos</Content.Item>
            <Content.Item>Houses</Content.Item>
            <Content.Item>Offices</Content.Item>
            <Content.Item>Retail</Content.Item>
            <Content.Item>Villas</Content.Item>
          </Content>
          <Content>
            <Content.Title>Contact us</Content.Title>
            <Wrapper>
              <Icon.Location />
            <Content.Item>329 Queensberry Street, North Melbourne VIC 3051, Australia.</Content.Item>
            </Wrapper>
            <Wrapper>
              <Icon.Phone/>
              <Content.Item>123 456 7890</Content.Item>
            </Wrapper>
            <Wrapper>
              <Icon.Email/>
              <Content.Item>support@houzing.com</Content.Item>
            </Wrapper>
            <Wrapper>
            <Icon.Facebook/>
            <Icon.Twitter/>
            <Icon.Instagram/>
            <Icon.Linkedin/>
            </Wrapper>
          </Content>
      </InnerContainer>
      <Bottom>
        <Content.Item>Copyright © 2022 CreativeLayers. All Right Reserved.</Content.Item>
        </Bottom>    
    </Container>
  )
}

export default Footer;
