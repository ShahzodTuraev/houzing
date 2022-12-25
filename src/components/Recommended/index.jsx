import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { Container, Content} from './style';
import HouseCard from '../HouseCard';
const {REACT_APP_BASE_URL: url} = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "5px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  dots: true,
  // appendDots: (dots) => <h1>{dots}</h1>
};

 export const Recommended = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
      useEffect(()=>{
        fetch(`${url}/houses/list`)
        .then((res)=>res.json())
        .then((res)=>{
          setData(res?.data || [])
        })
      }, []);
  return (
      <Container>
        <Content>
          <h1 className="title">Recommended</h1>
          <h1 className="supTitle">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h1>

        </Content>
         <Slider  {...settings}>
            {
              data.map(value=>{
                return(
                 <HouseCard key={value.id}
                 onClick ={()=>navigate(`/properties?category_id=${value.id}`)} 
                 data={value} 
                 />)})
            }
         </Slider>
    </Container>
  )
}

export default Recommended;
