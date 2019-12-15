import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const ItemsButton = (props) => {
    return (
        <button className={css(styles.button)} key={props.id} id={props.id} onClick={props.onClick}>
            {props.title}
            <p>{props.price}</p>
        </button>
    );
};

const styles = StyleSheet.create({
    button: {
        color: 'white',
        background: '#9f4400',
        border: 'none',
        padding: '1em',
        borderRadius: '6px',
        marginRight: '10px',
        margin: '0px 10px 10px 0',
    }
})

export default ItemsButton;