import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div className={props.class.container}>
            <label className={props.class.label} htmlFor={props.id}>{props.title}</label>
            <input onChange={props.onChange} value={props.value} className={props.class.input} type={props.type} placeholder={props.placeholder} id={props.id}></input>
        </div>
    );
};

Input.propTypes = {
    class: PropTypes.object,
    id: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
}

export default Input;