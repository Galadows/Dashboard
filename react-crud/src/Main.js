import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Connexion from './pages/Connexion';
import Register from './pages/Register';
import Dash from './pages/Dash';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Connexion}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/dash" component={Dash}></Route>
        </Switch>
    );
}

export default Main;