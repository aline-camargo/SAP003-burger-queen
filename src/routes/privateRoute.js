import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth, db } from '../util/firebaseConfig';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(online => {
      if (online) {
        db.collection('users')
          .doc(online.uid)
          .get()
          .then(querySnapshot => {
            let kitchen = false;
            if (querySnapshot.data().kitchen) {
              kitchen = true;
            }

            const kitchenAccess =
              (rest.path === '/cozinha' ||
                rest.path === '/pedidos-entregues') &&
              kitchen;
            const saloonAccess = rest.path !== '/cozinha' && !kitchen;

            kitchenAccess || saloonAccess ? setUser(true) : setUser(false);

            setLoad(false);
          });
      } else {
        setLoad(false);
        setUser(false);
      }
    });
  }, [rest.path]);

  if (load) {
    return null;
  } else {
    return (
      <Route
        {...rest}
        render={() =>
          user ? (
            <Component />
          ) : (
            <Redirect
              to={{ pathname: '/negado', state: { from: rest.location } }}
            />
          )
        }
      />
    );
  }
};

export default PrivateRoute;
