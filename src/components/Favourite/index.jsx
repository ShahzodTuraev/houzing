import React, {useContext} from 'react';
import { Container, Title} from './style';
import HouseCard from '../HouseCard'
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { PropertiesContext } from '../../context/properties';
 
export const Favourite = () => {
  const {search} = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext)

  const {refetch, data} = useQuery(
    [search],
    async()=>{
      const res = await fetch(
        `https://houzing-app.herokuapp.com/api/v1/houses/getAll/favouriteList`, 
        {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return await res.json();
  },
  {
    onSuccess: (res) => {
      dispatch({ type: "refetch", payload: refetch });
    },
  }
  );

  const onSelect =(id)=>{
    navigate(`/properties/${id}`)

  };
    return (
      <>
        <Title className="title">Favourite</Title>
        <h1 className="supTitle">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        <Container>
          {data?.data?.length ?(
           data?.data.map((value)=>{
              return (
              <HouseCard 
              onClick={()=>onSelect(value.id)} 
              data={value}
              key={value.id}
              />)
            }))
            : (<Title>No Favourites</Title>)
          }
        </Container>
      </>
  )
}

export default Favourite;
