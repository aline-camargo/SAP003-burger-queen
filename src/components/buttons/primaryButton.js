import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      type='button'
      name={props.name}
      className={props.class}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

Button.propTypes = {
  class: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
