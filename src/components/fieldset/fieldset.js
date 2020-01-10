import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import Option from './option';
import './style.css';

const Filedset = (props) => {
  return (
    <fieldset className={css(styles.container)}>
      <legend className={css(styles.legend)}>{props.title}:</legend>
      {props.options.map((option, index) => (
        <Option
          key={option.title}
          option={option}
          type={props.name}
          onChange={props.onChange}
          default={index === 0}
        />
      ))}
    </fieldset>
  );
};

Filedset.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    color: 'white',
    border: 'none',
    '@media(max-width: 500px)': {
      textAlign: 'center',
      marginBottom: '1em'
    }
  },
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
  },
  legend: {
    fontWeight: 'bold',
    width: '100%'
  }
});

export default Filedset;
