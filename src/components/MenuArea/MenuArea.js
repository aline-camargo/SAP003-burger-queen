import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const MenuArea = () => {
    return (
        <main className={css(styles.main)}></main>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '60vw',
    }
})

export default MenuArea;