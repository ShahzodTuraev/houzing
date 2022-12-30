import React from 'react';
import {Container, Wrapper, Icons} from './style'

const Feature = () => {
    
  return (
    <Container sb>
      <Wrapper>
        <Container>
          <Icons.Airconditioner />
          <div className="supTitle">Air Conditioning</div>
        </Container>
        <Container>
          <Icons.Barbeque />
          <div className="supTitle">Barbeque</div>
        </Container>
        <Container>
          <Icons.Dryer />
          <div className="supTitle">Dryer</div>
        </Container>
        <Container>
          <Icons.Gym />
          <div className="supTitle">Gym</div>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Icons.Grass />
          <div className="supTitle">Lawn</div>
        </Container>
        <Container>
          <Icons.Laundry />
          <div className="supTitle">Laundry</div>
        </Container>
        <Container>
          <Icons.Microwave />
          <div className="supTitle">Microwave</div>
        </Container>
        <Container>
          <Icons.Oshower />
          <div className="supTitle">Outdoor Shower</div>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Icons.Refrigerator />
          <div className="supTitle">Refrigerator</div>
        </Container>
        <Container>
          <Icons.Sauna />
          <div className="supTitle">Sauna</div>
        </Container>
        <Container>
          <Icons.Swimming />
          <div className="supTitle">Swimming Pool</div>
        </Container>
        <Container>
          <Icons.Tv />
          <div className="supTitle">TV Cable</div>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Icons.Washer />
          <div className="supTitle">Washer</div>
        </Container>
        <Container>
          <Icons.Wifi />
          <div className="supTitle">Wifi</div>
        </Container>
        <Container>
          <Icons.Window />
          <div className="supTitle">Window Coverings</div>
        </Container>
        <Container>
          <Icons.Dining />
          <div className="supTitle">Dining room</div>
        </Container>
      </Wrapper>
    </Container>
  )
}

export default Feature
