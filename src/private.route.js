import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Route, Redirect} from 'react-router-dom';
import { auth, db } from './util/firebaseConfig';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let history = useHistory();
    const [load, setLoad] = useState(true);
    const [user, setUser] = useState(true);
    
    useEffect(() => {
        auth.onAuthStateChanged((online) => {
            if (online) {
                db.collection('users').doc(online.uid)
                .get().then(querySnapshot => {
                    let kitchen = false;

                    if(querySnapshot.data().kitchen) {
                        kitchen = true;
                    }

                    const kitchenAccess = Component.name === 'Kitchen' && kitchen;
                    const saloonAccess = Component.name != 'Kitchen' && !kitchen;
                                        
                    if (kitchenAccess || saloonAccess){
                        setUser(true)
                    } else {
                        setUser(false)
                    }
                    setLoad(false)
                })
            } else {
                history.push('/negado')
            }
          });


    }, []);


    if (load) {
        return null
    } else {
        return (
            <Route {...rest} render={props => (
                user ? (
                <Component {...props} />
                ) : (
                <Redirect to={{pathname: '/negado', state: { from: props.location}}} />
                )
            )}/>
        )
    }
}

export default PrivateRoute;