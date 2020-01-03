import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeaderLoginComponentStyles } from './style';
import Button from '../../../Button';
import colors from '../../../../themes/colors';

const HeaderLoginComponent = styled.div(HeaderLoginComponentStyles);

const LoginLinkItem = styled.a`
    color: ${colors.black};
    text-decoration: none;
    display: inline-block;
    margin: 5px;
    padding: 0;
     
    &:hover {
        color: ${colors.lilac};
        text-decoration: none; 
        cursor: pointer;
    }
    
    &:active {
        border: none;
    }
`;

const HeaderLogin = () => (
    <HeaderLoginComponent>
        <NavLink to='/sign-in'><LoginLinkItem>Sign In</LoginLinkItem></NavLink>
        <NavLink to='login'><Button>GET STARTED</Button></NavLink>
    </HeaderLoginComponent>
);

export default HeaderLogin;
