import React from 'react';
import { Container } from './style';
import { GenCarousel } from '../Carousel';
import Category from '../Category';

const Home = () => {
  return (
    <Container>
     <GenCarousel />
     <Category/>
    </Container>
  )
}

export default Home
