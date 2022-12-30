import React from 'react';
import { Container } from './style';
import { GenCarousel } from '../Carousel';
import { Filter } from '../Filter';
import Category from '../Category';
import Recommended from '../Recommended';
import Why from '../Why';
import Recent from '../Recent';
import Banner from '../Banner';

const Home = () => {
  return (
    <Container>
     <Filter />
     <GenCarousel />
     <Recommended />
     <Why />
     <Category/>
     <Banner/>
     <Recent/>
    </Container>
  )
}

export default Home
