import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Total = () => {
    return (
        <div className={css(styles.container)}>
            <p className={css(styles.title)}>Total:</p>
            <p className={css(styles.result)}>R$ total</p>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 'inherit',
        height: '12%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTop: '5px solid rgb(225, 116, 9)',
        borderBottom: '5px solid rgb(225, 116, 9)',
    },
    title: {
        color: '#A62F03',
        display: 'inline',
        fontSize: '1.7em',
    },
    result: {
        fontSize: '1.7em',
        display: 'inline',
    }
})

export default Total;