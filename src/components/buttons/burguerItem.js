import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Filedset from '../fieldset/fieldset';
import BurguerOptions from './burguerOption';

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
                <div className={css(styles.buttons)}>
                    <BurguerOptions 
                        title='Cancelar'
                        color='#e61f1f'
                        onClick={props.functionCancel}
                    />
                    <BurguerOptions 
                        title='Confirmar'
                        color='#57ad1c'
                        onClick={props.functionOk}
                    />
                </div>
            </div>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        color: 'white',
        background: '#9f4400',
        border: 'none',
        padding: '1em',
        borderRadius: '6px',
        marginRight: '10px',
        margin: '0px 10px 10px 0',
    },
    options: {
        display: 'none',
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
    }
})

export default BurguerButton;