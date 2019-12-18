import React from 'react';

const Button = (props) => {
    return (
        <button type='button' name={props.name} className={props.class} onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default Button;