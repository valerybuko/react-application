import React, { useState } from 'react';
import styled from 'styled-components';
import { LayoutStyles } from './style';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import HamburgerMenu from './Header/HamburgerMenu';


const LayoutComponent = styled.div`${LayoutStyles}`;

const Layout = (props) => {
  const [initialState, setInitialState] = useState(false);
  return (
        <LayoutComponent>
            <Header headerMenuHamburgerStare={initialState} setHeaderMenuHamburgerStare={setInitialState}/>
            {
                !initialState
                  ? <>
                        <Content>
                            {props.children}
                        </Content>
                        <Footer/>
                  </>
                  : <HamburgerMenu/>
            }
        </LayoutComponent>
  );
};

export default Layout;
