import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeaderLoginComponentStyles } from './style';
import Button from '../../../Button';
import colors from '../../../../themes/colors';
import { defaultFonts } from '../../../../themes/fonts';

const HeaderLoginComponent = styled.div(HeaderLoginComponentStyles);

const LoginButton = styled(Button)`
    width: 136px;
    height: 43px;
    padding: 0;
    font-weight: ${defaultFonts.fontWeightBold}
`;

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
        <NavLink to='login'><LoginButton>GET STARTED</LoginButton></NavLink>
    </HeaderLoginComponent>
);

export default HeaderLogin;
