import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import LoginForm from '../Components/LoginForm';

const Routes = () => (
    <BrowserRouter>
        <Route exact path={'/'} component={App}/>
        <Route path={'/sign'} component={LoginForm}/>
        <Route path={'/started'} component={LoginForm}/>
    </BrowserRouter>
);

export default Routes;
