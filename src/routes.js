import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import { auth, db } from './util/firebaseConfig';
import NewOrder from './pages/newOrder';
import Kitchen from './pages/kitchen';
import ToDeliverOrders from './pages/toDeliverOrders';
import DeliveredOrders from './pages/deliveredOrders';
import Register from './pages/register';
import Login from './pages/login';
// import Denied from './pages/denied';

const Routes = () => {
    let history = useHistory();
    // const [kitchen, setKitchen] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged((online) => {
            if (online) {
                db.collection('users').doc(online.uid)
                .get().then(querySnapshot => {
                    if(querySnapshot.data().kitchen) {
                        history.push('/cozinha');
                        // setKitchen(true)
                    } else {
                        // setKitchen(false)
                        history.push('/novo-pedido');
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
                <Route path='/novo-pedido' component={NewOrder} />
                <Route path='/cozinha' component={Kitchen} />
                <Route path='/pedidos-prontos' component={ToDeliverOrders} />
                <Route path='/pedidos-entregues' component={DeliveredOrders} />
                {/* <Route path='/cozinha' render={ () => user ? <Kitchen /> : <Redirect to='/' /> } /> */}
                {/* <Route path='/cozinha' render={() => kitchen ?  <Kitchen/> : <Denied />} /> */}
            </Switch>
    )
}

export default Routes;