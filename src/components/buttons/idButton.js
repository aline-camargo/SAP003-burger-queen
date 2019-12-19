import React from 'react';
import PropTypes from 'prop-types';

const IdButton = (props) => {
    return (
        <button type='button' className={props.class} id={props.id} key={props.id} onClick={props.onClick}>
            {props.title}
        </button>
    );
};

IdButton.propTypes = {
    class: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.element,
    ]),
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onClick: PropTypes.func,
}


export default IdButton;