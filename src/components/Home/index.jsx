import React from 'react';
import { Container } from './style';
import { GenCarousel } from '../Carousel';
import  CategoryCard from '../CategoryCard';

const Home = () => {
  return (
    <Container>
     <GenCarousel />
     <CategoryCard />
    </Container>
  )
}

export default Home
