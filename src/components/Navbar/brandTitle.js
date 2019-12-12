import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Brand = () => {
    return (
        <h2 className={css(styles.title)}>Burguer Queen</h2>
    );
};

const styles = StyleSheet.create({
    title: {
        marginLeft: '2vh',
        color: 'white',
    }
})

export default Brand;