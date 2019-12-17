import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Checkbox from '../checkbox';


const OrderItem = (props) => {
    return (
        <div className={css(styles.container)}>
            <p className={css(styles.item)}>
                <span className={css(styles.quantity)}>
                    {props.quantity}
                </span>
                <span className={css(styles.white)}>
                    {props.title}
                </span>
            </p>
            <Checkbox />
        </div>
    );
};

const styles = StyleSheet.create({
    quantity: {
        background: '#f7f5f5',
        padding: '1px 4px',
        borderRadius: '3px',
        fontWeight: 'bold',
        marginRight: '5px',
    },
    container:{
        marginBottom: '0.5em',
        display: 'flex',
        justifyContent: 'space-between',

    },
    white: {
        color: 'white',
    },
    item: {
        display: 'inline',
    }
})

export default OrderItem;