import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuView from './Components/views/MenuView';
import LoginForm from './Components/LoginForm';
import Lost from './Components/Lost/Lost';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={MenuView}/>
            <Route exact path={'/sign'} component={LoginForm}/>
            <Route exact path={'/started'} component={LoginForm}/>
            <Route exact path={'/try-slack'} component={LoginForm}/>
            <Route exact path={'/contact-sales'} component={LoginForm}/>
            <Route component={Lost}/>
        </Switch>
    </BrowserRouter>
);

export default App;
