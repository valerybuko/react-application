import React from 'react';
import styled from 'styled-components';
import { LayoutStyles } from './style';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


const LayoutComponent = styled.div`${LayoutStyles}`;

const Layout = (props) => (
    <LayoutComponent>
        <Header/>
        <Content>
            {props.children}
        </Content>
        <Footer/>
    </LayoutComponent>
);

export default Layout;
