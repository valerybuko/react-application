import React from 'react';
import styled from 'styled-components';
import OuterLinkList from './OuterLinkList';
import LinkItem from '../../../LinkItem';
import { HeaderNavbarStyles } from './style';

const HeaderNavbarComponent = styled.div`${HeaderNavbarStyles}`;

const HeaderNavbar = () => (
  <HeaderNavbarComponent>
        <OuterLinkList/>
        <LinkItem href={'https://slack.com/intl/en-by/enterprise'}>Enterprise</LinkItem>
        <LinkItem href={'https://slack.com/intl/en-by/pricing'}>Pricing</LinkItem>
  </HeaderNavbarComponent>
);

export default HeaderNavbar;
