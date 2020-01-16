import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const Option = ({ option, type, onChange, isChecked }) => {
  return (
    <div className={css(styles.option)}>
      <input
        onChange={() => onChange(option.title, type)}
        className={css(styles.radio)}
        type='radio'
        name={type}
        id={option.title}
        defaultChecked={isChecked}
      ></input>
      <label htmlFor={option.title}>
        {option.title} {option.price}
      </label>
    </div>
  );
};

Option.propTypes = {
  option: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  radio: {
    width: '20px',
    height: '20px',
    marginRight: '5px',
    borderRadius: '50%',
    transition: '0.1s all linear',
    border: '2px solid white',
    ':checked': {
      border: '10px solid white'
    }
  },
  option: {
    display: 'flex',
    marginTop: '1em'
  }
});

export default Option;
