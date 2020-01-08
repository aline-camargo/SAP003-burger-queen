import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewOrder from './pages/newOrder';
import Kitchen from './pages/kitchen';
import ToDeliverOrders from './pages/toDeliverOrders';
import DeliveredOrders from './pages/deliveredOrders';
import Register from './pages/register';
import Login from './pages/login';
import Denied from './pages/denied';
import PrivateRoute from './private.route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/registro' component={Register} />
      <Route path='/negado' component={Denied} />
      <PrivateRoute path='/cozinha' component={Kitchen} />
      <PrivateRoute path='/novo-pedido' component={NewOrder} />
      <PrivateRoute path='/pedidos-prontos' component={ToDeliverOrders} />
      <PrivateRoute path='/pedidos-entregues' component={DeliveredOrders} />
    </Switch>
  );
};

export default Routes;
