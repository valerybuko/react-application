import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Header from './Components/Layout/header';
// eslint-disable-next-line import/no-unresolved
import DataContainer from './Components/Layout/header/DataContainer';
// eslint-disable-next-line import/no-unresolved
import Logo from './Components/Logo';
// eslint-disable-next-line import/no-unresolved
import HeaderNavbar from './Components/HeaderNavbar';
// eslint-disable-next-line import/no-unresolved
import LinkItem from './Components/LinkItem';
// eslint-disable-next-line import/no-unresolved
import Button from './Components/Button';

const App = () => (
    <div>
        <Header>
            <DataContainer>
                <Logo/>
                <HeaderNavbar/>
                <LinkItem>Sign In</LinkItem>
                <LinkItem><Button>Get started</Button></LinkItem>
            </DataContainer>
        </Header>
        < /div>
);

export default App;
