import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewOrder from './pages/newOrder';
import Kitchen from './pages/kitchen';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={NewOrder} />
                <Route path='/cozinha' component={Kitchen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;