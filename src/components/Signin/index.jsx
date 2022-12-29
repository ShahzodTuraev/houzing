import React, {  useState } from 'react';
import { Container, Content} from './style';
import { Input, Button } from '../Generic';
import useRequest from '../../hooks/useRequest'
import { useNavigate } from 'react-router-dom';
import {message} from 'antd';

 export const Recent = () => {
  const navigate = useNavigate();
  const request = useRequest();
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);

console.log(error);
  const onChange =({target:{value, placeholder}})=>{
    setBody({
      ...body,
      [placeholder]: value,
    });
    setError(false)
    console.log(error);
  };

  const info = () => {
    message.info('Successfully Signed in!');
  };
  const warning = () => {
    message.warning('Email or password is not correct!');
  };

  const onSubmit =async()=>{
    request({url:`/public/auth/login`, method: 'POST', body, me: true}).then(res=>{
      if(res?.authenticationToken)
      navigate('/home');
      localStorage.setItem('token', res?.authenticationToken)
      info()
    });
        try{
      let res = await fetch('https://houzing-app.herokuapp.com/api/public/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          }).then(res=>res.json());
          if(res?.authenticationToken)
          navigate('/home');
          localStorage.setItem('token', res?.authenticationToken)
          info();  
  }catch(error){
    warning();
  }
};
 
  return (
      <Container>
        <Content>
        <h1 className="title">Sign in</h1>
          <Input onChange={onChange} type ='email' placeholder ='email' />
          <Input onChange={onChange} type ='password' placeholder ='password' />
          <Button onClick={onSubmit} width='%'>Sign in</Button>
        </Content>
    </Container>
  )
}

export default Recent;
