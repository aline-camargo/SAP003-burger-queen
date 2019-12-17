import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import Navbar from '../components/navbar/navbar';

const Kitchen = () => {
    return (
        <>
            <Navbar />
            <div className={css(styles.container)}>
                <div className={css(styles.title)}>oi</div>
            </div>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: '80px',
    },
    container: {
        marginTop: '60px',
        display: 'flex',
        height: '90vh',
    }
})

export default Kitchen;