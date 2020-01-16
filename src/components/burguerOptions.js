import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import Fieldset from './fieldset/fieldset';
import Button from './primaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const BurguerOptions = ({hamburguer, onChange, functionOk}) => {
  return (
    <div className={css(styles.options)}>
      <h3 className={css(styles.header)}>
        {hamburguer.title} R$ {hamburguer.price}
      </h3>
      <Fieldset
        name={'flavour'}
        options={hamburguer.flavour}
        onChange={onChange}
      >
        Sabor
      </Fieldset>
      <Fieldset
        name={'extras'}
        options={hamburguer.extras}
        onChange={onChange}
      >
        Adicionais
      </Fieldset>
      <Button
        style={css(styles.ckeckButton)}
        onClick={functionOk}
      >
        <FontAwesomeIcon icon={faCheck} />
      </Button>
    </div>
  );
};

BurguerOptions.propTypes = {
    functionOk: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    hamburguer: PropTypes.object.isRequired,
  };

const styles = StyleSheet.create({
  options: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    background: '#cb6023',
    padding: '1em',
    borderRadius: '6px',
    marginBottom: '10px'
  },
  header: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '10px',
    width: '100%'
  },
  ckeckButton: {
    color: 'white',
    border: 'none',
    padding: '0.2em 0.3em',
    display: 'inline',
    background: '#57ad1c',
    fontSize: '31px',
    borderRadius: '6px',
    height: 'max-content',
    alignSelf: 'flex-end',
    marginTop: '0.7em',
    ':hover': {
      cursor: 'pointer'
    }
  }
});

export default BurguerOptions;
