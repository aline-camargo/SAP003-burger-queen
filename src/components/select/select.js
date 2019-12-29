import React from 'react';
import PropTypes from 'prop-types';
// import { StyleSheet, css } from 'aphrodite/no-important';
import './style.css';

const Select = (props) => {
    return (
        // <div className={css(styles.selectDiv)}>
            <select onChange={props.onChange} className='select'>
                <option value="false">Salão</option> 
                <option value="true">Cozinha</option>
            </select>
        // </div>
    )
}

Select.propTypes = {
    onChange: PropTypes.func,
}

// const styles = StyleSheet.create({
    // select: {
    //     webkitAppearance: 'none',
    //     mozAppearance: 'none',
    //     msAppearance: 'none',
    //     appearance: 'none',
    //     outline: '0',
    //     boxShadow: 'none',
    //     border: 'none',
    //     background: 'url(../images/v(1).png) no-repeat #eeeeee',
    //     backgroundPosition: '76px center',
    //     // backgroundImage: '../images/v(1).png',
    //     padding: '0.5em',
    //     color: '#2c3e50',
    //     borderRadius: '4px',
    //     cursor: 'pointer',
    //     '::-ms-expand' : {
    //         display: 'none',
    //     },
    // }
    // select: {
    //     webkitAppearance: 'none',
    //     mozAppearance: 'none',
    //     appearance: 'none',
    //     background: 'url(../images/v.png) no-repeat #eeeeee',
    //     backgroundPosition: '76px center',
    //     width: '107px',
    //     height: '34px',
    //     border:'1px solid #ad31da',
    //     borderRadius: '6px',
    //     backgroundColor:'#643173',
    //     backgroundSize: '29px',
    //     color:'white',
    //     padding: '6px 9px',
    // }
    // selectDiv: {
    //     position: 'relative',
    //     display: 'flex',
    //     width: '20em',
    //     height: '3em',
    //     lineHeight: '3',
    //     background: '#2c3e50',
    //     overflow: 'hidden',
    //     borderRadius: '0.25em',
    //     '::after': {
    //         content: 'a',
    //         clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
    //         position: 'absolute',
    //         color: 'white',
    //         top: '0',
    //         right: '0',
    //         padding: '0 1em',
    //         background: '#34495e',
    //         cursor: 'pointer',
    //         pointerEvents: 'none',
    //         webkitTransition: '0.25s all ease',
    //         oTransition: '0.25s all ease',
    //         transition: '0.25s all ease',
    //       },
    //       ':hover::after': {
    //         color: '#f39c12',
    //       }
    // }

// })


export default Select;