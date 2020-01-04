import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = (props) => {
    return (
        <h2 className={props.class}>{props.title}</h2>
    );
};

Subtitle.propTypes = {
    class: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ])
}

export default Subtitle;