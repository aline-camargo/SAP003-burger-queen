import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
    return (
        <select onChange={props.onChange}>
            <option value="false">Salão</option> 
            <option value="true">Cozinha</option>
        </select>
    )
}

Select.propTypes = {
    onChange: PropTypes.func,
}

export default Select;