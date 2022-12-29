import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import { useParams } from 'react-router-dom';
import nouser from '../../assets/img/nouser.png'
import { 
  Container, 
  Wrapper, 
  Content, 
  Message, 
  Details, 
  Section, 
  Icons, 
  Description,
  User,
  Line
} from './style';
import {Input, Button} from '../Generic'
// import {Yandex} from '../Generic/Yandex'
import Similar from '../Similar'

 export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(()=>{
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ localStorage.getItem("token")}`,
      },
    })
    .then((res)=>res.json())
    .then((res)=>{
      setData(res?.data);
      window.scrollTo(0, 0)
      });
    }, [params?.id]);
  return (
    <Section>
    <Wrapper>
        <Container  flex={3}>
                <Content>
              <Section >
                <div className="title">{data?.name}</div>
                <div className="supTitle">{data?.city},{data?.address},{data?.country}</div>
              </Section>
              <Content  pointer>
                <Icons.Love/>
                <div className="info">Save</div>

              </Content>
            </Content>
              <Content>
                <Details>
                  <Icons.Bed/>
                  <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
                  <Icons.Bath/>
                  <Details.Title>Bath {data?.houseDetails?.bath || 0}</Details.Title>
                  <Icons.Car/>
                  <Details.Title>Garage {data?.houseDetails?.garage || 0}</Details.Title>
                  <Icons.Ruler/>
                  <Details.Title>{data?.houseDetails?.area || 0} Sq Ft</Details.Title>
                  <Icons.Calendar/>
                  <Details.Title>Year Built: {data?.houseDetails?.yearBuilt || 0}</Details.Title>
                </Details>
                <div>
                <Content>
                  <div className="info" style={{padding: '8px'}}>  <del>${data?.price || 0}/mo</del></div>
                  <div className="title">${data?.salePrice|| 0}/mo</div>
                </Content>
                  <Details.Title>Influencer: {data?.user?.firstname}</Details.Title>            
                </div>
              </Content>
              <Description.Title mb>Description</Description.Title>
              <Description>{data?.description}. Occupying over {data?.houseDetails?.area || 2000} square feet, perched over 1,100 
              feet in the air 
              with absolutely breathtaking panoramic 360-degree views of all of New York City
              and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue
                has been completely reimagined by one of the most sought-after design houses 
                in London and represents an utterly unique opportunity to own a 
                globally significant property.
                <br/>The residence is comprised of {data?.houseDetails?.beds || 2} bedrooms, 
                {data?.houseDetails?.bath || 2} master bathrooms, 2 on-suite guest bathrooms, {data?.houseDetails?.room || 2} powder rooms, 2 offices, 
                2 dressing rooms, a media room, an oversized eat-in gourmet chef's kitchen, 
                and a sprawling 1,100 square-foot Great Room perfectly situated in the prime 
                southwest corner of the floor.
              </Description>
              <Description.Title>Location</Description.Title>
              {/* <Yandex /> */}
              <Line />
        </Container>
        <Container flex={1}>
          <Message>
            <Content even>
              <User.Img alt='user img' src={nouser}/>
              <Section>
                <div className="subTitle">Darrel Steward</div>
                <Details.Title>(123)456-7890</Details.Title>
              </Section>
            </Content>
            <Input placeholder='Name' />
            <Input placeholder='Phone' />
            <Input placeholder='Email' />
            <Input placeholder='Message' />
            <Checkbox className='info'>By submitting this form I agree to Terms of Use</Checkbox>
            <Button width={'%'}>Send request</Button>
          </Message>
        </Container>       
    </Wrapper>
    <Similar />
    </Section>
  )
}

export default HouseItem;
// feature/house-card
