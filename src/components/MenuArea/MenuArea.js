import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Tabs from '../Tabs/tabs';

const MenuArea = () => {
    return (
        <main className={css(styles.main)}>
        <ul className={css(styles.ul)}>
            <Tabs 
                title= 'Café da manhã'
                active={true}
            />
            <Tabs 
                title= 'Almoço e Jantar'
                active={false}
            />
        </ul>
        </main>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '60vw',
        marginTop: '60px',
        height: '100%',
        padding: '1em',
    },
    ul: {
        borderBottom: '2px solid #e17409'
    }
})

export default MenuArea;