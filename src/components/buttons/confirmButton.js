import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Button = (props) => {
    return (
        <button type='button' className={css(styles.button)} onClick={props.onClick}>{props.title}</button>
    );
};

const styles = StyleSheet.create({
    button: {
        background: '#57ad1c',
        color: 'white',
        border: 'none',
        width: '80%',
        height: '8%',
        padding: '1%',
        fontSize: '23px',
        borderRadius: '6px',
        marginTop: '4%',
    }
})

export default Button;