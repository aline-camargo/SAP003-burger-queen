import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Title = () => {
    return (
        <h2 className={css(styles.title)}>Pedido</h2>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#A62F03',
    }
})

export default Title;