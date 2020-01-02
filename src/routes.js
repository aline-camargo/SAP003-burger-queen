import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth, db } from './util/firebaseConfig';
import NewOrder from './pages/newOrder';
import Kitchen from './pages/kitchen';
import ToDeliverOrders from './pages/toDeliverOrders';
import DeliveredOrders from './pages/deliveredOrders';
import Register from './pages/register';
import Login from './pages/login';

const Routes = () => {
    // auth.onAuthStateChanged((user) => {
    //     if (user) {
    //       db.collection('users').doc(user.uid)
    //       .get().then(querySnapshot => {
    //         if (querySnapshot.data().kitchen) {
    //             console.log('cozinha')
    //             // window.location.pathname = 'cozinha'
    //         } else {
    //             console.log('salão')
    //             // window.location.pathname = 'novo-pedido'
    //         }
    //       })
    //     } else {
    //         window.location.pathname = ''
    //     }
    //   });
      
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/registro' component={Register} />
                <Route path='/novo-pedido' component={NewOrder} />
                <Route path='/cozinha' component={Kitchen} />
                <Route path='/pedidos-prontos' component={ToDeliverOrders} />
                <Route path='/pedidos-entregues' component={DeliveredOrders} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;