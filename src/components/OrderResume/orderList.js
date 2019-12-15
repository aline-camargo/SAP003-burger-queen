// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { faBars } from '@fortawesome/free-solid-svg-icons'

// import { db } from '../../util/firebaseConfig';
import { StyleSheet, css } from 'aphrodite/no-important';

const List = (props) => {
    const renderListItems = () => {
        return props.resume.map(item => {
            if(item.title.includes('Hambúrguer')) {
                if(item.extras !== 'Nenhum') {
                    return <div key={Math.random()} className={css(styles.item)}>
                    <p className={css(styles.p)}>{item.title} ({item.flavour.substring(0, 3)}) + {item.extras}</p>
                    <p className={css(styles.p)}>R$ {item.price}</p>
                </div>
                } else {
            return <div key={Math.random()} className={css(styles.item)}>
                    <p className={css(styles.p)}>{item.title} ({item.flavour.substring(0, 3)})</p>
                    <p className={css(styles.p)}>R$ {item.price}</p>
                </div>
                }
            } else {
            return <div key={Math.random()} className={css(styles.item)}>
                <p className={css(styles.p)}>{item.title}</p>
                <p className={css(styles.p)}>R$ {item.price}</p>
            </div>
        }})
    }

    return (
        <>
            <div id="orderList" className={css(styles.list)}>
                {renderListItems()}
            </div>
            <div className={css(styles.total)}>
                <p className={css(styles.title)}>Total:</p>
                <p className={css(styles.result)}>R$ {props.resume.reduce((acc, curr) => acc + Number(curr.price), 0)}</p>
            </div>
        </>
    );
};

const styles = StyleSheet.create({
    list: {
        overflow: 'auto',
        height: '55%',
        width: '90%',
        marginTop: '20px',
        borderRadius: '6px',
        background: '#e174095e',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
    },
    total: {
        height: 'max-content',
        width: '90%',
        justifyContent: 'space-between',
        display: 'flex',
        alignSelf: 'center',
        border: '2px solid #E17409',
        padding: '7px',
        borderRadius: '6px',
        marginTop: '2%',
    },
    title: {
        color: '#A62F03',
        display: 'inline',
        fontSize: '1.7em',
    },
    result: {
        fontSize: '1.7em',
        display: 'inline',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1em',
    },
    p: {
        display: 'inline',
    }
})

export default List;