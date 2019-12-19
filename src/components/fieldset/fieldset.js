import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import './style.css';

const Filedset = (props) => {
    return (
        <fieldset className={css(styles.container)}>
            <legend className={css(styles.legend)}>{props.title}:</legend>
            <div className={css(styles.option)}>
                <input onChange={props.onChange} className={css(styles.radio)} type="radio" name={props.name} id={props.options[0].title} defaultChecked></input>
                <label htmlFor={props.options[0].title}>{props.options[0].title} {props.options[0].price}</label>
            </div>
            <div className={css(styles.option)}>
                <input onChange={props.onChange} className={css(styles.radio)} type="radio" name={props.name} id={props.options[1].title}></input>
                <label htmlFor={props.options[1].title}>{props.options[1].title} {props.options[1].price}</label>
            </div>
            <div className={css(styles.option)}>
                <input onChange={props.onChange} className={css(styles.radio)} type="radio" name={props.name} id={props.options[2].title}></input>
                <label htmlFor={props.options[2].title}>{props.options[2].title} {props.options[2].price}</label>
            </div>
        </fieldset>
    );
};

Filedset.propTypes = {
    options: PropTypes.array,
    title: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        display: 'inline-flex',
        flexDirection: 'column',
        color: 'white',
        border: 'none',
        '@media(max-width: 500px)': {
            textAlign: 'center',
            marginBottom: '1em',
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
                border: '10px solid white',
        }
    },
    option: {
        display: 'flex',
        marginTop: '1em',
    },
    legend: {
        fontWeight: 'bold',
        width: '100%',
    }
})

export default Filedset;