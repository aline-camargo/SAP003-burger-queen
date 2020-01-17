import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';

const NavbarList = ({user, load, opa}) => {
  if (!load) {
    return null;
  } else {
    return (
      <div className={css(styles.navList)} id='navbarNav'>
        <ul className={css(styles.navbar)}>
          {user ? (
            <li className={css(styles.navItem)}>
              <Link to='/cozinha' className={css(styles.link)}>
                Cozinha
            </Link>
            </li>
          ) : (
            <>
              <li className={css(styles.navItem)}>
                <Link to='/novo-pedido' className={css(styles.link)}>
                  Novo pedido
              </Link>
              </li>
              <li className={css(styles.navItem)}>
                <Link to='/pedidos-prontos' className={css(styles.link)}>
                  Pedidos prontos
              </Link>
              </li>
            </>
          )}
          <li className={css(styles.navItem)}>
            <Link to='/pedidos-entregues' className={css(styles.link)}>
              Pedidos entregues
          </Link>
          </li>
          <li className={css(styles.navItem)} onClick={opa}>
            <Link to='/' className={css(styles.link)}>
              Sair
          </Link>
          </li>
        </ul>
      </div>
    );
  }
};

const styles = StyleSheet.create({
  navItem: {
    listStyle: 'none',
    marginTop: '0.7em',
    fontSize: '1.2em',
    '@media (min-width: 1025px)': {
      display: 'inline',
      marginRight: '15px'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    transition: '0.2s linear',
    ':hover': {
      color: 'rgb(225, 116, 9)'
    }
  },
  disabledLink: {
    pointerEvents: 'none'
  },
  navList: {
    width: '80vw',
    color: 'white',
    '@media (min-width: 1025px)': {
      display: 'block',
      width: 'max-content'
    }
  }
});

export default NavbarList;
