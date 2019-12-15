import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const BurguerOptions = (props) => {
    return (
        <button type='button' name="burguer-options" className={css(styles.button)} onClick={props.onClick}>
            <FontAwesomeIcon icon={faCheck}/>
        </button>
    );
};

const styles = StyleSheet.create({
    button: {
        color: 'white',
        border: 'none',
        padding: '0.2em 0.3em',
        display: 'inline',
        background: '#57ad1c',
        fontSize: '31px',
        borderRadius: '6px',
        height: 'max-content',
        alignSelf: 'self-end',
    }
})

export default BurguerOptions;