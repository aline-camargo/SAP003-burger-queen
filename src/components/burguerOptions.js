import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Filedset from './fieldset/fieldset';
import Button from './buttons/primaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const BurguerOptions = (props) => {
    return (
        <div className={css(styles.options)}>
        <h3 className={css(styles.header)}>
          {props.hamburguer.title} R$ {props.hamburguer.price}
        </h3>
        <Filedset
          name={'flavour'}
          title='Sabor'
          options={props.hamburguer.flavour}
          onChange={props.onChange}
        />
        <Filedset
          name={'extras'}
          title='Adicionais'
          options={props.hamburguer.extras}
          onChange={props.onChange}
        />
        <Button
          name='burguer-options'
          class={css(styles.ckeckButton)}
          onClick={props.functionOk}
          title={<FontAwesomeIcon icon={faCheck} />}
        />
      </div>
    )
}

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
      alignSelf: 'self-end',
      marginTop: '0.7em',
      ':hover': {
        cursor: 'pointer'
      }
    }
  });

export default BurguerOptions;