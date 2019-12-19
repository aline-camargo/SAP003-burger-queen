import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <h2 className={props.class}>{props.title}</h2>
    );
};

Title.propTypes = {
    class: PropTypes.string,
    title: PropTypes.string,
}

export default Title;