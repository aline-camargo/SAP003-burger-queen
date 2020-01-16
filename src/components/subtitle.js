import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({style, children}) => {
  return <h2 className={style}>{children}</h2>;
};

Subtitle.propTypes = {
  style: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};

export default Subtitle;
