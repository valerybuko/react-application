import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../../../Logo';
import { HeaderLogoComponentStyles } from './style';

const HeaderLogoComponent = styled.div`${HeaderLogoComponentStyles}`;

const HeaderLogo = () => (
    <HeaderLogoComponent>
        <NavLink to={'/'}><Logo/></NavLink>
    </HeaderLogoComponent>
);

export default HeaderLogo;
