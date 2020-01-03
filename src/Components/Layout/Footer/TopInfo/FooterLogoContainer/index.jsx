import React from 'react';
import styled from 'styled-components';
import { FooterLogoContainerStyles } from './style';
import FooterLogo from './FooterLogo';

const FooterLogoContainerComponent = styled.div`${FooterLogoContainerStyles}`;

const FooterLogoContainer = (props) => (
    <FooterLogoContainerComponent>
        <FooterLogo/>
    </FooterLogoContainerComponent>
);

export default FooterLogoContainer;
