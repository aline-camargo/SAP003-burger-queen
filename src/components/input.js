import React from 'react';
import PropTypes from 'prop-types';

const Input = ({style, onChange, value, type, placeholder, id, children, ref}) => {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={id}>
        {children}
      </label>
      <input
        ref={ref}
        onChange={onChange}
        value={value}
        className={style.input}
        type={type}
        placeholder={placeholder}
        id={id}
      ></input>
    </div>
  );
};

Input.propTypes = {
  style: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ref: PropTypes.string,
};

export default Input;
