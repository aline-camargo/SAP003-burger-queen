import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const HeaderList = () => {    
    return (
        <div className={css(styles.navList, styles.big)} id="navbarNav">
                <ul className={css(styles.navbar)}>
                    <li className={css(styles.navItem, styles.bigItem)}>
                        <span className="nav-link">Novo pedido</span>
                    </li>
                    <li className={css(styles.navItem, styles.bigItem)}>
                        <span className="nav-link">Cozinha</span>
                    </li>
                    <li className={css(styles.navItem, styles.bigItem)}>
                        <span className="nav-link">Pedidos prontos</span>
                    </li>
                    <li className={css(styles.navItem, styles.bigItem)}>
                        <span className="nav-link">Pedidos entregues</span>
                    </li>
                </ul>
        </div>
    );
};

// const className = css((window.innerWidth < 1025) ? styles.navList : styles.big)

const styles = StyleSheet.create({
    navItem: {
        listStyle: 'none',
        marginTop: '1%',
        fontSize:'1.2em',
    },
    big: {
        '@media (min-width: 1025px)': {
            display: 'block',
            width: 'max-content',
        }
    },
    bigItem: {
        '@media (min-width: 1025px)': {
            display: 'inline',
            marginRight: '15px',
        }
    },
    navList: {
        width: '80vw',
        color: 'white',
        display: 'none',
    }
})

export default HeaderList;