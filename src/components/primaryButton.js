import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ style, onClick, children}) => {
  return (
    <button
      type='button'
      className={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
