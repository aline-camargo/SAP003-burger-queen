import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const HeaderList = () => {
    return (
        <div className={css(styles.navList)} id="navbarNav">
                <ul className={css(styles.navbar)}>
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
        marginTop: '1%',
        fontSize:'1.2em',
    },
    navList: {
        width: '80vw',
        color: 'white',
        display: 'none',
    }
})

export default HeaderList;