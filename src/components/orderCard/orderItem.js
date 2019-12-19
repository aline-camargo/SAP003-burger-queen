import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const OrderItem = (props) => {
    return (
        <div className={css(styles.item)}>
            <p>
                <span className={css(styles.quantity)}>
                    {props.quantity}
                </span>
                <span className={css(styles.white)}>
                    {props.title}
                </span>
            </p>
            {
                (props.done || !props.kitchen)
                ? <span className={css(styles.white)}>R$ {props.price}</span>
                : null
            }
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
    white: {
        color: 'white',
    },
    item: {
        marginBottom: '0.5em',
        display: 'flex',
        justifyContent: 'space-between',
    }
})

export default OrderItem;