// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/named
import { LayoutStyles } from './style';
// eslint-disable-next-line import/no-unresolved
import Header from './Header';
// eslint-disable-next-line import/no-unresolved
import Content from './Content';
// eslint-disable-next-line import/no-unresolved
import Footer from './Footer';


const LayoutComponent = styled.body`${LayoutStyles}`;

const Layout = (props) => (
    <LayoutComponent>
        <Header/>
        <Content>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </Content>
        <Footer/>
    </LayoutComponent>
);

export default Layout;
