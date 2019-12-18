import React from 'react';

const Input = (props) => {
    return (
        <div className={props.class.container}>
            <label className={props.class.label} htmlFor={props.id}>{props.title}:</label>
            <input onChange={props.onChange} value={props.value} className={props.class.input} type='text' placeholder={props.placeholder} id={props.id}></input>
        </div>
    );
};

export default Input;