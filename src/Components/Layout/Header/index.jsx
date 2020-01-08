import React from 'react';
import styled from 'styled-components';
import { HeaderStyles } from './style';
import HeaderNavbar from './HeaderNavbar';
import HeaderLogo from './HeaderLogo';
import HeaderLogin from './HeaderLogin';


const HeaderComponent = styled.header`${HeaderStyles}`;

const Header = (props) => (
    <HeaderComponent>
        <HeaderLogo/>
        <HeaderNavbar/>
        <HeaderLogin
            headerMenuHamburgerStare={props.headerMenuHamburgerStare}
            setHeaderMenuHamburgerStare={props.setHeaderMenuHamburgerStare}
        />
    </HeaderComponent>
);

export default Header;
