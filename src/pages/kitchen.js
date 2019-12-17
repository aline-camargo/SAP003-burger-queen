import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Navbar from '../components/navbar/navbar';

const Kitchen = () => {
    return (
        <>
        <Navbar />
        <div>
        <h1 className={css(styles.title)}>oi</h1>
        </div>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        // marginTop: '60px',
        fontSize: '80px',
    }
})

export default Kitchen;