import React, {useRef} from 'react';
import { Carousel } from 'antd';
import { Container, Arrow, Img, Blur, Contnet } from './style';

import img1 from '../../assets/img/house1.png';
import img2 from '../../assets/img/house2.png';
 export const GenCarousel = () => {
    const slider = useRef();
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const onMove=({
        target:{
        dataset: {name},
        },
        })=>{
        if(name === 'right') slider.current.next();
        if(name === 'left') slider.current.prev();
    };
  return (
      <Container>
        <Carousel autoplay>
            <Img src={img1}/>
            <Img src={img2}/>
        </Carousel>
        <Blur />
        <Contnet>
            <Contnet.Title>Skyper Pool Partment</Contnet.Title>
            <Contnet.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Contnet.Desc>
            <Contnet.Price>$5,250/month</Contnet.Price>   
            
        </Contnet>
        <Arrow onClick={onMove} data-name='left' left={'true'} />
        <Arrow onClick={onMove} data-name='right' />
    </Container>
  )
}

export default GenCarousel
