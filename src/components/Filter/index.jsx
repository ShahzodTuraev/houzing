import React, {useRef, useEffect, useState} from 'react';
import { Container, Icons, MenuWrapper, Section, SelectAnt} from './style';
import { Input, Button } from '../Generic';
import { Dropdown } from 'antd';
import { uzeReplace } from '../../hooks/uzeReplace';
import { useNavigate, useLocation } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';

 export const Filter = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('Select Category');

  const {REACT_APP_BASE_URL: url} = process.env;
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef =useRef();
  const regionRef =useRef();
  const cityRef =useRef();
  const zipRef =useRef();

  const roomsRef =useRef();
  const minRef =useRef();
  const maxpriceRef =useRef();

  const onChange =({target:{name, value}})=>{
    navigate(`${location?.pathname}${uzeReplace(name, value)}`)
  };

  useEffect(()=>{
    fetch(`${url}/categories/list`)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res?.data || []);
    });
  }, [url]);

  useEffect(()=>{
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get('category_id'))
    );
    d?.name && setValue(d?.name);
    !query.get('category_id') && setValue('Select Category');
  }, [location?.search, data, query]);

  const onChangeCategory =(category_id)=>{
    navigate(`/properties/${uzeReplace('category_id', category_id)}`)
  };
  const onChangeSort =(sort)=>{
    navigate(`/properties/${uzeReplace('sort', sort)}`)
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
        name='address'
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
      <Input 
        defaultValue={query.get('room')}
        onChange={onChange} 
        ref={roomsRef} 
        placeholder='Rooms'
        name='room' 
        />
      <SelectAnt 
        defaultValue={query.get('sort') || 'Select Sort'} 
        onChange={onChangeSort}
      >
        <SelectAnt.Option value={''}>Select Sort</SelectAnt.Option>
        <SelectAnt.Option value={'asc'}>Ascending</SelectAnt.Option>
        <SelectAnt.Option value={'desc'}>Descending</SelectAnt.Option>
      </SelectAnt>

      <SelectAnt value={value} onChange={onChangeCategory}>
      <SelectAnt.Option value={''}>Select Category</SelectAnt.Option>         
        {
          data.map((value)=>{
            return( 
            <SelectAnt.Option key={value.id} value={value?.id}>
              {value?.name}
            </SelectAnt.Option>
            );
          })}
      </SelectAnt>
    </Section>  
      <h1 className='subTitle'>Price</h1>
    <Section>
      <Input onChange={onChange} name='min_price' ref={minRef} placeholder='Min Price'/>
      <Input onChange={onChange} name='max_price' ref={maxpriceRef} placeholder='Max Price'/>
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
