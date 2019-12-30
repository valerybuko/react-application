import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeaderLoginComponentStyles } from './style';
import Button from '../../../Button';
import LinkItem from '../../../LinkItem';

const HeaderLoginComponent = styled.div(HeaderLoginComponentStyles);

const HeaderLogin = () => (
    <HeaderLoginComponent>
        <NavLink to='/sign-in'><LinkItem>Sign In</LinkItem></NavLink>
        <NavLink to='login'><Button>GET STARTED</Button></NavLink>
    </HeaderLoginComponent>
);

export default HeaderLogin;
