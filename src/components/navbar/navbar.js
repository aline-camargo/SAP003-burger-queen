import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarList from './navbarList';
import Button from '../primaryButton';
import Subtitle from '../subtitle';
import { auth, db } from '../../util/firebaseConfig';
import useWindowSize from './windowSize';
import notification from '../notifications';

const Navbar = () => {
  const history = useHistory();
  const size = useWindowSize();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('');
  const [load, setLoad] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .get()
          .then((querySnapshot) => {
            setName(querySnapshot.data().name);
            setUser(querySnapshot.data().kitchen);
            setLoad(true);
          });
      }
    });
  }, []);

  const logout = () => {
    auth
      .signOut()
      .then(history.push('/'))
      .catch((error) => {
        notification({
          title: error.code,
          message: error.message,
          type: 'danger'
        });
      });
  };

  return (
    <header>
      <nav className={css(styles.navbar, styles.big)}>
        <Button
          style={css(styles.button, styles.bigScreen)}
          onClick={()=> setShow(!show)}
        >
          <FontAwesomeIcon icon={faBars} className={css(styles.icon)} />
        </Button>
        <Subtitle style={css(styles.title)}>Burguer Queen, {name}</Subtitle>
        {size.width > 1025 || show ? <NavbarList user={user} load={load} opa={logout}/> : null}
      </nav>
    </header>
  );
};

const styles = StyleSheet.create({
  navbar: {
    background: '#A62F03',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '1em',
    position: 'fixed',
    top: '0',
    width: '100%'
  },
  big: {
    '@media (min-width: 1025px)': {
      justifyContent: 'space-between'
    }
  },
  button: {
    height: 'max-content',
    background: 'none',
    border: 'none',
    ':hover': {
      cursor: 'pointer'
    }
  },
  bigScreen: {
    '@media (min-width: 1025px)': {
      display: 'none'
    }
  },
  icon: {
    fontSize: '200%',
    color: 'white'
  },
  title: {
    marginLeft: '2vh',
    color: 'white'
  }
});

export default Navbar;
