import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import LoginForm from './Components/LoginForm';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path={'/sign-in'} component={LoginForm}/>
                <Route exact path={'/login'} component={LoginForm}/>
                <Route exact path={'/try-slack'} component={LoginForm}/>
                <Route exact path={'/sign-in-info'} component={LoginForm}/>
            </Switch>
        </Layout>
    </Router>
);

export default App;
