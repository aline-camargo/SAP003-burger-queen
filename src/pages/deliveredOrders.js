import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Navbar from '../components/navbar/navbar';

const DeliveredOrders = () => {
    return (
        <>
            <Navbar />
            <div className={css(styles.container)}>
                <h1 className={css(styles.heading)}>Pedidos entregues</h1>
            </div>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '60px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    heading: {
        height: 'max-content',
        width: '94%',
        padding: '0.5em',
        color: 'rgb(166, 47, 3)',
        borderBottom: '2px solid rgb(225, 116, 9)',
    }
})

export default DeliveredOrders;