import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const Title = (props) => {
  return <h1 className={css(styles.heading)}>{props.title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string
};

const styles = StyleSheet.create({
  heading: {
    height: 'max-content',
    width: '94%',
    padding: '0.5em',
    color: 'rgb(166, 47, 3)',
    borderBottom: '2px solid rgb(225, 116, 9)'
  }
});

export default Title;
