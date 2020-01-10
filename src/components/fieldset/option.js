import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

const Option = (props) => {
  return (
    <div className={css(styles.option)}>
      <input
        onChange={() => props.onChange(props.option.title, props.type)}
        className={css(styles.radio)}
        type='radio'
        name={props.type}
        id={props.option.title}
        defaultChecked={props.default}
      ></input>
      <label htmlFor={props.option.title}>
        {props.option.title} {props.option.price}
      </label>
    </div>
  );
};

Option.propTypes = {
  option: PropTypes.object,
  type: PropTypes.string,
  onChange: PropTypes.func,
  default: PropTypes.bool
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
