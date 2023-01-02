import React, {useEffect, useState} from 'react';
import { Wrapper, Container, TitleBox, AntTable, Icons, User } from './style';
import noimg from '../../assets/img/noimage.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
const {REACT_APP_BASE_URL: url} = process.env;
 
const MyProfile = () => {
  const [data, setData] = useState([]);
  const {search} = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`${url}/houses/me`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res?.data || [])
    })
  }, [search]);

  const columns = [
    {
      title: 'Listing Title',
      key: 'name',
      render: (data)=> {return(
        <User sb>
          <User>
            <User.Img src ={(data.attachments && data.attachments[0]?.imgPath) || noimg}/>
            <User flex>
              <div className="subTitle">
                {data.country}, {data.address}
              </div>
              <div className="subTitle">
                {data.city}, {data.region}
              </div>
              <div className="info">
                Price: <del> ${data.salePrice}</del> 
              </div>
              
            </User>
          </User>
          
          <Button>For Sale</Button>
        </User>
      
      )},
    },
    {
      title: 'Year Build',
      render: (data)=> <span>{data.houseDetails.yearBuilt}</span>,
      key: 'houseDetails.yearBuilt',
    },
    {
      title: 'Email',
      render: ({user})=> <span>{user.email}</span> ,
      key: 'user.email',      
    },
    {
      title: 'Sale Price',
      render: (data)=> <span>$ {data.salePrice}</span>,
      key: 'price',
      width: 150,
    },
    {
      title: 'Action',
      key: 'user.email',
      width: 150,
      render: (data)=>{
        return <div>
          <Icons.Edit/>
          <Icons.Delete/>
          </div>
      },
    },
  ];
    return (
      <Wrapper>
        <TitleBox>
          <h1 className="title">My Properties</h1>
          <Button onClick={()=>navigate('/myprofile/newhouse')}>Add House</Button>
        </TitleBox>
        <Container>
        <AntTable 
        dataSource={data} 
        columns={columns} 
        />
      </Container>
      </Wrapper> 
  )
}
export default MyProfile;
