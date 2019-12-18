import React from 'react';

const IdButton = (props) => {
    return (
        <button type='button' className={props.class} id={props.id} key={props.id} onClick={props.onClick}>
            {props.title}
        </button>
    );
};

export default IdButton;