import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Select = ({ onChange }) => {
  return (
    <select onChange={onChange} className='select' defaultValue='title'>
      <option value='title' disabled>
        Selecione sua área
      </option>
      <option value='false'>Salão</option>
      <option value='true'>Cozinha</option>
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Select;
