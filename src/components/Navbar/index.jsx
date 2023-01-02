import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Container, Wrapper, Section, Logo, Link, Main, Menu, } from './style';
import { Button } from '../Generic/';
import Footer from '../Footer';
import { Dropdown} from 'antd';

export const Navbar = () => {
    let token = localStorage.getItem('token')
    const navigate = useNavigate();

    const onClick = () =>{      
            navigate('/signin')
    };
    const onClickProfile = ({
        target:{
            dataset: {name},
        }
    }) =>{
        if (name === 'logout'){
            localStorage.removeItem('token');
            navigate(`/home`);
        }else{
            navigate(`${name}`);
        }      
    };
    const menu = <Menu>
        <Menu.Item data-name = 'myprofile' onClick={onClickProfile}>My Profile</Menu.Item>
        <Menu.Item data-name = 'myproperties' onClick={onClickProfile}>My Properties</Menu.Item>
        <Menu.Item data-name = 'favourite' onClick={onClickProfile}>Favourites</Menu.Item>
        <Menu.Item data-name = 'logout' onClick={onClickProfile}>Log out</Menu.Item>
    </Menu>;

  return (
    <Container>
        <Main>
            <Wrapper>
                <Section onClick={()=>navigate('/home')} logo>
                    <Logo /><h3>Houzing</h3> 
                </Section>
                <Section>
                    {
                    navbar.map(({title, path, hidden}, index)=>{
                    return ( 
                    !hidden && (
                        <Link className={({isActive}) => isActive && 'active'} 
                        key={index} 
                        to={path}>
                            {title}
                        </Link>));
                    })
                    }
                </Section>
                <Section>
                    {
                        token? (
                        <Dropdown
                        overlay={menu}
                        placement='topRight'
                        arrow={{pointAtCenter: true}}
                        trigger='click'
                        >
                            <Button type={'dark'}>
                                <div>Profile</div>
                            </Button>
                        </Dropdown>
                        ) : (
                            <Button onClick={onClick} type={'dark'}>
                                Sign in
                            </Button>
                    )}
                    
                </Section>
            </Wrapper>
        </Main>
        <Outlet />
        <Footer />
    </Container>
  )
}

export default Navbar
