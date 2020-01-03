import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { auth, db } from './util/firebaseConfig';
import NewOrder from './pages/newOrder';
import Kitchen from './pages/kitchen';
import ToDeliverOrders from './pages/toDeliverOrders';
import DeliveredOrders from './pages/deliveredOrders';
import Register from './pages/register';
import Login from './pages/login';

const Routes = () => {
    // const [user, setUser] = useState(false)
    // const [kitchen, setKitchen] = useState(false)

    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setUser(true)
    //         } else {
    //             setUser(false)
    //         }
    //       });
    // }, [])
      
    
    // const rdPorra = () => {
    //     console.log(user, kitchen)
    //       console.log('chegou')
    //       if (user && kitchen) {
    //           return <Redirect  to='/cozinha' />
    //       } else if (user && !kitchen){
    //           return <Redirect  to='/novo-pedido' />
    //       } else {
    //           return <Login />
    //       }
    //   }

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