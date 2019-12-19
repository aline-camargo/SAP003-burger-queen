import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = (props) => {
    return (
        <h2 className={props.class}>{props.title}</h2>
    );
};

Subtitle.propTypes = {
    class: PropTypes.string,
    title: PropTypes.string,
}

export default Subtitle;