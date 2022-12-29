import React, {useEffect, useState} from 'react';
import { Container } from './style';
import HouseCard from '../HouseCard'
import { Filter } from '../Filter';
import { useLocation, useNavigate } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
const {REACT_APP_BASE_URL: url} = process.env;
 
const Properties = () => {
  const [data, setData] = useState([]);
  const {search} = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  useEffect(()=>{
    fetch(`${url}/houses/list${search}`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res?.data || [])
    })
    // request({url:'/houses/list${search}'})
  }, [search]);

  const onSelect =(id)=>{
    navigate(`/properties/${id}`)

  };
    return (
      <>
        <Filter />
        <h1 className="title">Properties</h1>
        <h1 className="supTitle">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>
        <Container>
        {
          data.map((value)=>{
            return (
            <HouseCard 
            onClick={()=>onSelect(value.id)} 
            data={value}
            key={value.id}
            />)
          })
        }
      </Container>
      </>
    
  )
}

export default Properties;
