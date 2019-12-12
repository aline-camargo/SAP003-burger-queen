import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Input = (props) => {
    return (
        <div className={css(styles.container)}>
            <label className={css(styles.label)} htmlFor={props.id}>{props.title}:</label>
            <input value={props.value} onChange={props.onChange} className={css(styles.input)} type={props.type} placeholder={props.placeholder} id={props.id}></input>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
    },
    label: {
        color: '#A62F03',
    },
    input: {
        border: '1px solid gray',
        borderRadius: '6px',
        padding: '2%',
        width: '80%',
    }
})

export default Input;