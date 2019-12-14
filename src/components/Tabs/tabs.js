import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Tabs = (props) => {
    return (
        <button className={css(styles.tabs, styles.button)} onClick={props.onClick} autoFocus={props.active} id={props.id}>{props.title}</button>
    )
}


const styles = StyleSheet.create({
    tabs: {
        display: 'inline',
    },
    button: {
        background: '#f7f5f5',
        color: '#e17409',
        border: '2px solid #e17409',
        borderBottom: 'none',
        padding: '1em',   
        ':focus': {
            background: '#e17409',
            color: 'white',
          },
    }
})

export default Tabs;