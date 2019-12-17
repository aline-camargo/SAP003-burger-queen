import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Checkbox = () => {
    return (
        <input type="checkbox" className={css(styles.checkbox)}></input>
    );
};

const styles = StyleSheet.create({
    // checkbox: {
    //     transform: 'scale(1.4)',
    // }
})

export default Checkbox;