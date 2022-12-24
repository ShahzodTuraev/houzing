import React from 'react';
import { Container, Img, Content, Blur} from './style';
import noimg from '../../assets/img/noimage.png';
import category from '../../assets/img/category.png';


 export const CategoryCard = ({onClick, data ={}}) => {
    const { name } = data;
  return (
    <Container onClick={onClick}>
       <Img src={category || noimg}/>
       <Blur />
       <Content>
            {name || `Category Name`}
       </Content>
    </Container>
  );
};

export default CategoryCard;


