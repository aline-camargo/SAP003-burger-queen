import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const HeaderList = () => {
    return (
        <div className={css(styles.navList)} id="navbarNav">
                <ul className="navbar-nav">
                    <li className={css(styles.navItem)}>
                        <span className="nav-link">Novo pedido</span>
                    </li>
                    <li className={css(styles.navItem)}>
                        <span className="nav-link">Cozinha</span>
                    </li>
                    <li className={css(styles.navItem)}>
                        <span className="nav-link">Pedidos prontos</span>
                    </li>
                    <li className={css(styles.navItem)}>
                        <span className="nav-link">Pedidos entregues</span>
                    </li>
                </ul>
        </div>
    );
};

const styles = StyleSheet.create({
    navItem: {
        listStyle: 'none',
        display: 'inline',
        marginLeft: '2vw',
    },
    navList: {
        width: '70vw',
        color: 'white',
    }
})

export default HeaderList;