import React from 'react';
import { Container, Img, Blur, Contnet } from './style';
import {Button} from '../Generic'

import img2 from '../../assets/img/house2.png'

 export const Banner = () => {
    
  return (
      <Container>
            <Img src={img2}/>
        <Blur />
        <Contnet>
            <Contnet.Title>
                Vermont Farmhouse With Antique Jail Is
                the Week's Most Popular Home
            </Contnet.Title>
            <Button>Read more</Button>
            
        </Contnet>
    </Container>
  )
}

export default Banner
