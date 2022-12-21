import React from 'react';
import { Container, Img, Content, Details, Icons, Divider} from './style';
import noimg from '../../assets/img/noimage.png'


 export const HouseCard = ({data}) => {
    console.log(data);
    const {
            attachments,
            price, 
            salePrice, 
            houseDetails, 
            address, 
            city, 
            country, 
            description,
        } = data;
  return (
    <Container>
       <Img src={(attachments && attachments[0]?.imgPath) || noimg}/>
       <Content>
            <div className="subTitle inline">{city} {country} {description}</div>
            <div className="info">{address || 'Quincy St, Brooklyn, NY, USA'}</div>
            <Details>
                <Details.Item>
                    <Icons.Bed/>
                    <div className="info">Bed {houseDetails?.beds || 0}</div>
                </Details.Item>
                <Details.Item>
                    <Icons.Bath/>
                    <div className="info">Bath {houseDetails?.bath || 0}</div>
                </Details.Item>
                <Details.Item>
                    <Icons.Car/>
                    <div className="info">Garage {houseDetails?.garage || 0}</div>
                </Details.Item>
                <Details.Item>
                    <Icons.Ruler/>
                    <div className="info">{houseDetails?.area || 0} Sq Ft</div>
                </Details.Item>
            </Details>
       </Content>
       <Divider/>
       <Content footer>
        <Details.Item footer>
            <div className="info">${price || 0}/mo</div>
            <div className="subTitle">${salePrice|| 0}/mo</div>
        </Details.Item>
        <Details.Item footerRow>
            <Icons.Resize/>
            <Icons.Love/>
        </Details.Item>
       </Content>
    </Container>
  )
}

export default HouseCard;
