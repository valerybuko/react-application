import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path={'/'} component={App}/>
        <Route path={'/sign'} component={LoginForm}/>
        <Route path={'/started'} component={LoginForm}/>
    </BrowserRouter>, document.getElementById('root'),
);
