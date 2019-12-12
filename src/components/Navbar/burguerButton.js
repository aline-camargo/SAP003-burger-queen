import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const BurguerButton = () => {
    return (
        <button className={css(styles.button, styles.big)} type="button" data-toggle="collapse" 
        // onClick={props.handleClick}
        >
                <FontAwesomeIcon icon={faBars} className={css(styles.icon)}/>
        </button>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 'max-content',
        background: 'none',
        border: 'none',
    },
    big: {
        '@media (min-width: 1025px)': {
            display: 'none',
        }
    },
    icon: {
        fontSize: '200%',
        color: 'white',
    }
})

export default BurguerButton;