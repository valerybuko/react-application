import React from 'react';
import styled from 'styled-components';
import { FooterStyles } from './style';
import HamburgerMenu from '../Header/HamburgerMenu';

const Footer = styled.footer`${FooterStyles}`;

const Test = () => (<Footer>
    <HamburgerMenu/>
</Footer>);

export default Test;
