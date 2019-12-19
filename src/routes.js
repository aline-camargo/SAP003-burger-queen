import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewOrder from './pages/newOrder';
import Kitchen from './pages/kitchen';
import ToDeliverOrders from './pages/toDeliverOrders';
import DeliveredOrders from './pages/deliveredOrders';
import Register from './pages/register';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Register} />
                <Route exact path='/novo-pedido' component={NewOrder} />
                <Route path='/cozinha' component={Kitchen} />
                <Route path='/pedidos-prontos' component={ToDeliverOrders} />
                <Route path='/pedidos-entregues' component={DeliveredOrders} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;