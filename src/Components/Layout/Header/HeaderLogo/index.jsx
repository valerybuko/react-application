import React from 'react';
import styled from 'styled-components';
import Logo from '../../../Logo';
import { HeaderLogoComponentStyles } from './style';

const HeaderLogoComponent = styled.div`${HeaderLogoComponentStyles}`;

const HeaderLogo = () => (
    <HeaderLogoComponent>
        <Logo/>
    </HeaderLogoComponent>
);

export default HeaderLogo;
