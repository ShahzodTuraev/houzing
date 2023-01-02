import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { Wrapper, Container, TitleBox, AntTable, Icons, User } from './style';
import noimg from '../../assets/img/noimage.png';
import { Button } from '../Generic';
import { useQuery } from "react-query";
import { message } from "antd";
 
const MyProfile = () => {

  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const columns = [
    {
      title: 'Listing Title',
      key: 'name',
      render: (data)=> {
        return(
        <User sb>
          <User>
            <User.Img 
            src ={
              (data.attachments && data.attachments[0]?.imgPath) || noimg
              }
              />
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
      key: 'email',      
    },
    {
      title: 'Sale Price',
      render: (data)=> <span>$ {data.salePrice}</span>,
      key: 'price',
      width: 150,
    },
    {
      title: 'Action',
      key: 'email',
      width: 150,
      render: (data)=>{
        return (
          <User>
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </User>
          )
      },
    },
  ];
  const onDelete = (id) => {
    request({ url: `/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully deleted");
          refetch();
        }
      }
    );
  };
    return (
      <Wrapper>
        <TitleBox>
          <h1 className="title">My Properties</h1>
          <Button onClick={()=>navigate('/myprofile/newhouse')}>Add House</Button>
        </TitleBox>
        <Container>
        <AntTable
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              navigate(`/properties/${record?.id}`);
            }, // click row
          };
        }}
        dataSource={data?.data} 
        columns={columns} 
        />
      </Container>
      </Wrapper> 
  )
}
export default MyProfile;
