import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { Container} from './style';
import CategoryCard from '../CategoryCard';
const {REACT_APP_BASE_URL: url} = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  dots: true,
  // appendDots: (dots) => <h1>{dots}</h1>
};

 export const Category = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`${url}/categories/list`)
        .then((res)=>res.json())
        .then((res)=>{
          setData(res?.data || [])
        })
      }, [])
  return (
      <Container>
         <Slider  {...settings}>
            {
              data.map(value=>{
                return(
                 <CategoryCard key={value.id}
                 onClick ={()=>navigate(`/properties?category_id=${value.id}`)} 
                 data={value} 
                 />)})
            }
         </Slider>
    </Container>
  )
}

export default Category;
