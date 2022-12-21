import React, {useRef} from 'react';
import { Container, Icons, MenuWrapper, Section} from './style';
import { Input, Button } from '../Generic';
import { Dropdown } from 'antd';
import { uzeReplace } from '../../hooks/uzeReplace';
import { useNavigate, useLocation } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';

 export const Filter = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef =useRef();
  const regionRef =useRef();
  const cityRef =useRef();
  const zipRef =useRef();

  const roomsRef =useRef();
  const sizeRef =useRef();
  const sortRef =useRef();

  const minRef =useRef();
  const maxpriceRef =useRef();

  const onChange =({target:{name, value}})=>{
    // console.log(name, value);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  };

  const menu = (
    <MenuWrapper> 
      <h1 className='subTitle'>Address</h1>
     <Section>
      <Input 
        defaultValue={query.get('country')}
        onChange={onChange} 
        ref={countryRef} 
        placeholder='Country'
        name='country'
      />
      <Input 
        defaultValue={query.get('region')}
        onChange={onChange} 
        ref={regionRef} 
        placeholder='Region'
        name='region'
      />
      <Input
        defaultValue={query.get('city')}
        onChange={onChange}
        ref={cityRef} 
        placeholder='City'
        name='city'
      />
      <Input
        defaultValue={query.get('zip_code')}
        onChange={onChange} 
        ref={zipRef} 
        placeholder='Zip Code'
        name='zip_code'
       />
     </Section>
    
      <h1 className='subTitle'>Apartment info</h1>
    <Section>
      <Input ref={roomsRef} placeholder='Rooms'/>
      <Input ref={sizeRef} placeholder='Size'/>
      <Input ref={sortRef} placeholder='Sort'/>
    </Section>  
    
      <h1 className='subTitle'>Price</h1>
    <Section>
      <Input ref={minRef} placeholder='Min Price'/>
      <Input ref={maxpriceRef} placeholder='Max Price'/>
    </Section>
    
    <Section footer>
    <Button type='light'>
      Cancel
    </Button>
    <Button>
      Submit
    </Button>

    </Section>
  </MenuWrapper>
  );
  return (
    <Container>
      <Input
      icon={<Icons.Houses/>}
      placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
      <Dropdown 
        overlay={menu} 
        placement="bottomRight" 
        arrow={{ pointAtCenter: true }}
        trigger='click'
      >
        <div>
      <Button type='light'><Icons.Filter/>Advanced</Button>
        </div>       
      </Dropdown>
          <Button>
            <Icons.Search/>Search
          </Button>
     
    </Container>
  )
}

export default Filter;
