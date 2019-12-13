import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Tabs = (props) => {
    return (
        <li className={css(styles.tabs)}><button type='button' autoFocus={props.active} className={css(styles.button)}>{props.title}</button></li>
    )
}


const styles = StyleSheet.create({
    tabs: {
        display: 'inline',
    },
    button: {
        background: '#e17409',
        border: '2px solid #e17409',
        borderBottom: 'none',
        padding: '1em',
        color: 'white',
        ':focus': {
            background: '#f7f5f5',
            color: '#e17409',
          },
    }
})

export default Tabs;