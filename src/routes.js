import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { auth, db } from './util/firebaseConfig';
import NewOrder from './pages/newOrder';
import Kitchen from './pages/kitchen';
import ToDeliverOrders from './pages/toDeliverOrders';
import DeliveredOrders from './pages/deliveredOrders';
import Register from './pages/register';
import Login from './pages/login';
import Denied from './pages/denied';

const Routes = () => {
    let history = useHistory();
    const [kitchen, setKitchen] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged((online) => {
            if (online) {
                db.collection('users').doc(online.uid)
                .get().then(querySnapshot => {
                    if(querySnapshot.data().kitchen) {
                        setKitchen(true)
                    } else {
                        setKitchen(false)
                    }
                })
            } else {
                history.push('/');
            }
          });
    }, [])

    return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/registro' component={Register} />
                <Route path='/novo-pedido' component={!kitchen? NewOrder: Denied} />
                <Route path='/cozinha' component={ kitchen ? Kitchen : Denied} />
                <Route path='/pedidos-prontos' component={!kitchen? ToDeliverOrders : Denied} />
                <Route path='/pedidos-entregues' component={kitchen || !kitchen ? DeliveredOrders : Denied} />
                <Route path='/negado' component={Denied} />
            </Switch>
    )
}

{/* <Route exact path='/' component={Login} />
                <Route path='/registro' component={Register} />
                <Route path='/novo-pedido' render={() => !kitchen? <NewOrder /> : <Redirect to='/negado' />} />
                <Route path='/cozinha' render={ () => kitchen ? <Kitchen /> : <Redirect to='/negado'/>} />
                <Route path='/pedidos-prontos' render={() => !kitchen? <ToDeliverOrders /> : <Redirect to='/negado' />} />
                <Route path='/pedidos-entregues' render={() => kitchen || !kitchen ? <DeliveredOrders /> : <Redirect to='/negado' />} />
                <Route path='/negado' component={Denied} /> */}

export default Routes;