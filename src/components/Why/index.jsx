import React from 'react';
import { Container, HeadContent, Content, Wrapper, Icon} from './style';

 export const Why = () => {
  return (
      <Container>
        <HeadContent>
          <h1 className="title">Why Choose Us?</h1>
          <h1 className="supTitle">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        </HeadContent>
        <Wrapper>
          <Content>
            <Icon.Message />
            <div className="subTitle">Trusted By Thousands</div>
            <div className="info">
              With over 1 million+ homes for sale available on the website, 
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
          <Content>
            <Icon.Home />
            <div className="subTitle">Wide Renge Of Properties</div>
            <div className="info">
              With over 1 million+ homes for sale available on the website, 
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
          <Content>
            <Icon.Calculator />
            <div className="subTitle">Financing Made Easy</div>
            <div className="info">
              With over 1 million+ homes for sale available on the website, 
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
          <Content>
            <Icon.Maps />
            <div className="subTitle">See Neighborhoods</div>
            <div className="info">
              With over 1 million+ homes for sale available on the website, 
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
        </Wrapper>
        
    </Container>
  )
}

export default Why;
