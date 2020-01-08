import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import { auth, db } from './util/firebaseConfig';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log(props)
  let history = useHistory();
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

            const kitchenAccess = Component.name === 'Kitchen' && kitchen;
            const saloonAccess = Component.name !== 'Kitchen' && !kitchen;

            if (kitchenAccess || saloonAccess) {
              setUser(true);
            } else {
              setUser(false);
            }
            setLoad(false);
          });
      } else {
        setLoad(false);
        setUser(false);
      }
    });
  }, []);

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
