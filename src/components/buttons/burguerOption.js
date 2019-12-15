import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const BurguerOptions = (props) => {
    return (
        <button type='button' name="burguer-options" className={css(styles.button)} style={{background: props.color}} onClick={props.onClick}>
            {props.title}
        </button>
    );
};

const styles = StyleSheet.create({
    button: {
        color: 'white',
        border: 'none',
        width: '100%',
        height: '20%',
        padding: '6%',
        display: 'inline',
        fontSize: '19px',
        borderRadius: '6px',
        margin: '4% 0',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }
})

export default BurguerOptions;