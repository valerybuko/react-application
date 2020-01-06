import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MenuHamburgerSVG } from '../../svg/hamburger.svg';

export const MenuHamburgerWrapper = styled.div`
    display: none;
    
    @media (max-width: 1065px) {
        display: block;   
    }
`;

const MenuHamburger = () => <MenuHamburgerSVG/>;

export default MenuHamburger;
