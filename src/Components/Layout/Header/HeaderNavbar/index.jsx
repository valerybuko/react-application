import React from 'react';
import styled from 'styled-components';
import OuterLinkList from './OuterLinkList';
import LinkItem from '../../../LinkItem';
import { HeaderNavbarStyles } from './style';
import MenuHamburger from '../../../MenuHamburger';

const HeaderNavbarComponent = styled.span`${HeaderNavbarStyles}`;
const HeaderNavbarMenu = styled.div`
    display: flex;
    flex-direction: row;
`;

const HeaderNavbar = () => (
  <HeaderNavbarComponent>
      <HeaderNavbarMenu>
          <OuterLinkList/>
          <LinkItem href={'https://slack.com/intl/en-by/enterprise'}>Enterprise</LinkItem>
          <LinkItem href={'https://slack.com/intl/en-by/pricing'}>Pricing</LinkItem>
      </HeaderNavbarMenu>
      <MenuHamburger/>
  </HeaderNavbarComponent>
);

export default HeaderNavbar;
