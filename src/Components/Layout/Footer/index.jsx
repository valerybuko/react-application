import React from 'react';
import styled from 'styled-components';
import { FooterStyles } from './style';
import TopInfo from './TopInfo';
import AdditonalInfo from './AdditionalInfo';

const FooterContainer = styled.footer`${FooterStyles}`;

const Footer = (props) => (
    <FooterContainer>
        <TopInfo/>
        <AdditonalInfo/>
    </FooterContainer>
);

export default Footer;
