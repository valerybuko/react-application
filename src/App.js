import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MenuView from './Components/views/MenuView';
import LoginForm from './Components/LoginForm';
import Lost from './Components/Lost/Lost';
import { ApplicationStyles } from './Components/views/styles/Application';
import LoginFormContainer from './Components/LoginForm/LoginFormContainer';

const ApplicationWrapper = styled.div`${ApplicationStyles}`;

const App = () => (
    <ApplicationWrapper>
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} render={() => <MenuView/>} />
                <Route exact path={'/sign'} render={() => <LoginFormContainer><LoginForm/></LoginFormContainer>} />
                <Route exact path={'/started'} render={() => <LoginFormContainer><LoginForm/></LoginFormContainer>} />
                <Route exact path={'/try-slack'} render={() => <LoginFormContainer><LoginForm/></LoginFormContainer>} />
                <Route exact path={'/contact-sales'} render={() => <LoginFormContainer><LoginForm/></LoginFormContainer>} />
                <Route component={Lost}/>
            </Switch>
        </BrowserRouter>
    </ApplicationWrapper>
);

export default App;
