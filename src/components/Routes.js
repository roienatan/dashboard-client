import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Routes/Dashboard';
import Users from './Routes/Users';
import Messages from './Routes/Messages';
import Support from './Routes/Support';
import About from './Routes/About';


export default function Routes() {
    return (
        <Switch>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
            <Route path='/users'>
                <Users />
            </Route>
            <Route path='/messages'>
                <Messages />
            </Route>
            <Route path='/support'>
                <Support />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
        </Switch>
    )
}