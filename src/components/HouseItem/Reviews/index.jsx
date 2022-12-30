import React from 'react';
import {Container, Wrapper, Icons, User} from './style';
import user1 from '../../../assets/img/avatar-1.png';
import user2 from '../../../assets/img/avatar-2.png';

const Reviews = () => {
    
  return (
   <Container sb>
    <Wrapper width>
      <Container >
        <Wrapper>
          <div className="supTitle">Cleanliness</div>
          <div className="supTitle">Communication</div>
          <div className="supTitle">Cleanliness</div>
        </Wrapper>
      <Wrapper>
        <Container>
          <Icons.Rate />
          <div className="infoRate">4.7</div>
        </Container>
        <Container>
          <Icons.Rate90 />
          <div className="infoRate">4.9</div>
        </Container>
        <Container>
          <Icons.Rate90 />
          <div className="infoRate">4.9</div>
        </Container>
      </Wrapper>
    </Container>
    <Wrapper gap>
    <User.Img alt='user img' src={user1}/>
      <div className="subTitle">Jane Cooper</div>
      <Container>
        <div className="supTitle">April 6, 2021 at 3:21 AM</div>
        <Container ml>
          <Icons.Star/>
          <Icons.Star/>
          <Icons.Star/>
          <Icons.Star/>
          <Icons.Star/>
          <div className="supTitle">(5 reviews)</div>
        </Container>        
      </Container>
    </Wrapper>
    <div className="supTitle" style={{textAlign: 'justify'}}>Every single thing we tried with John was delicious! 
      Found some awesome places we would definitely go back to on our trip. 
      John was also super friendly and passionate about Beşiktaş and Istanbul. 
    </div>
  </Wrapper>
  <Wrapper width>
      <Container >
        <Wrapper>
          <div className="supTitle">Cleanliness</div>
          <div className="supTitle">Communication</div>
          <div className="supTitle">Cleanliness</div>
        </Wrapper>
      <Wrapper>
        <Container>
          <Icons.Rate />
          <div className="infoRate">4.7</div>
        </Container>
        <Container>
          <Icons.Rate90 />
          <div className="infoRate">4.9</div>
        </Container>
        <Container>
          <Icons.Rate90 />
          <div className="infoRate">4.9</div>
        </Container>
      </Wrapper>
    </Container>
    <Wrapper gap>
    <User.Img alt='user img' src={user2}/>
      <div className="subTitle">Darrel Steward</div>
      <Container>
        <div className="supTitle">April 1, 2021 at 9:46 AM</div>
        <Container ml>
          <Icons.Star/>
          <Icons.Star/>
          <Icons.Star/>
          <Icons.Star/>
          <Icons.Star/>
          <div className="supTitle">(5 reviews)</div>
        </Container>        
      </Container>
    </Wrapper>
      <div className="supTitle" style={{textAlign: 'justify'}}>Every single thing we tried with John was delicious! 
        Found some awesome places we would definitely go back to on our trip. 
        John was also super friendly and passionate about Beşiktaş and Istanbul. 
      </div>    
    </Wrapper>
  </Container>
  )
}

export default Reviews
