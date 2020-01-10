import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeaderLoginComponentStyles } from './style';
import Button from '../../../Button';
import colors from '../../../../themes/colors';
import { defaultFonts } from '../../../../themes/fonts';
import MenuHamburgerImage, { MenuHamburgerWrapper } from '../../../MenuHamburger';
import CloseMenu from '../../../CloseMenu';

const HeaderLoginComponent = styled.div(HeaderLoginComponentStyles);

const LoginButton = styled(Button)`
    width: 136px;
    height: 43px;
    padding: 0;
    font-weight: ${defaultFonts.fontWeightBold}
`;

const LoginLinkItem = styled.span`
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

const HeaderLoginWrapper = styled.span`
     @media (max-width: 1065px) {
        display: none;   
    }
`;

const HeaderLogin = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGamburgerMenuClick = (e) => {
    setIsMenuOpen(!isMenuOpen);
    props.setHeaderMenuHamburgerStare(!props.headerMenuHamburgerStare);
  };

  return (
        <HeaderLoginComponent>
            <HeaderLoginWrapper>
                <NavLink to='/sign-in'><LoginLinkItem>Sign In</LoginLinkItem></NavLink>
                <NavLink to='login'><LoginButton>GET STARTED</LoginButton></NavLink>
            </HeaderLoginWrapper>
            <MenuHamburgerWrapper onClick={handleGamburgerMenuClick}>
                {
                    isMenuOpen ? <CloseMenu/> : <MenuHamburgerImage />
                }
            </MenuHamburgerWrapper>
        </HeaderLoginComponent>
  );
};

export default HeaderLogin;
