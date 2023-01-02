import React, { useContext } from 'react';
import { Container, Img, Content, Details, Icons, Divider} from './style';
import noimg from '../../assets/img/noimage.png';
import { message } from 'antd';
import { PropertiesContext } from '../../context/properties';


 export const HouseCard = ({data ={}, onClick}) => {
    const [state] = useContext(PropertiesContext)
    const {
            attachments,
            price, 
            salePrice, 
            houseDetails, 
            address, 
            city, 
            country, 
            description,
            category,
            favorite,
            id
        } = data;

    const save =(event)=>{
        event?.stopPropagation();
        console.log('test', id);
        fetch(
            `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`, 
            {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            }
        ).then((res)=>res.json())
        .then((res)=>{
            if(favorite)res?.success && message.warning('Successfully disliked')
            else res?.success && message.info('Successfully liked');
            state.refetch && state.refetch();
        
        });
    }
  return (
    <Container onClick={onClick}>
       <Img src={(attachments && attachments[0]?.imgPath) || noimg}/>
       <Content>
            <div className="subTitle inline">{city} {country} {description}</div>
            <div className="info">
                {address || 'Quincy St, Brooklyn, NY, USA'} -  
                {category?.name || 'Category'} {houseDetails?.room ||0} rooms
            </div>
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
            <Icons.Love onClick={save} favorite={favorite}/>
        </Details.Item>
       </Content>
    </Container>
  )
}

export default HouseCard;
