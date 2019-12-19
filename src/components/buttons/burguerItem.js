import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Filedset from '../fieldset/fieldset';
import Button from './primaryButton';

const BurguerButton = (props) => {
    return (
        <>
            <button className={css(styles.button)} key={props.id} id={props.id} onClick={props.onClick}>
                {props.title}
                <p>{props.price}</p>
            </button>
            <div className={css(styles.options)}>
                <h3 className={css(styles.header)}>{props.title} {props.price}</h3>
                <Filedset 
                    name={'flavour' + props.id}
                    title='Sabor'
                    options={props.flavour}
                    onChange={props.onChange}
                />
                <Filedset 
                    name={'extras' + props.id}
                    title='Adicionais (+ R$ 1)'
                    options={props.extras}
                    onChange={props.onChange}
                />
                <Button
                    name='burguer-options'
                    class={css(styles.ckeckButton)}
                    onClick={props.functionOk}
                    title={<FontAwesomeIcon icon={faCheck}/>}
                />
            </div>
        </>
    );
};

BurguerButton.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    functionOk: PropTypes.func,
    title: PropTypes.string,
    extras: PropTypes.array,
    flavour: PropTypes.array,
    price: PropTypes.string,
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        background: '#9f4400',
        border: 'none',
        padding: '1em',
        borderRadius: '6px',
        marginRight: '10px',
        margin: '0px 10px 10px 0',
        ':hover':{
            cursor: 'pointer',
        }
    },
    options: {
        display: 'none',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        background: '#cb6023',
        padding: '1em',
        borderRadius: '6px',
        marginBottom: '10px',
    },
    buttons: {
        display: 'inline-flex',
        flexDirection: 'column',
        width: '20%',
        position: 'relative',
        top: '-27px',
    },
    header: {
        textAlign: 'center',
        color: 'white',
        marginBottom: '10px',
        width: '100%',
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
        ':hover':{
            cursor: 'pointer',
        }
    }
})

export default BurguerButton;