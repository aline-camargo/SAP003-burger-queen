import React, { useState, useEffect } from 'react';
import { db } from '../../util/firebaseConfig';
import { StyleSheet, css } from 'aphrodite/no-important';

const List = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     db.collection('new-order')
    //     .doc('order')
    //     .onSnapshot(querySnapshot => {
    //         const arr = querySnapshot.data().products;
    //         arr.forEach(id => {
    //             db.collection('menu').doc(id).get().then(doc => console.log(doc.data()))
    //         })
    //         // console.log(querySnapshot.data().products);
            
    //     })
    // }, [])

    return (
        <div id="orderList" className={css(styles.list)}>
            <div className={css(styles.total)}>
            {/* {products.map(item => {
                return <div>{item}</div>
            })} */}
            <p className={css(styles.title)}>Total:</p>
            <p className={css(styles.result)}>R$ total</p>
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    list: {
        overflow: 'auto',
        height: '55%',
        width: '90%',
        marginTop: '20px',
        background: '#e174095e',
        padding: '1em',
        display: 'flex',
    },
    total: {
        height: 'max-content',
        width: '100%',
        alignSelf: 'end',
        justifyContent: 'space-between',
        display: 'flex',
    },
    title: {
        color: '#A62F03',
        display: 'inline',
        fontSize: '1.7em',
    },
    result: {
        fontSize: '1.7em',
        display: 'inline',
    }
})

export default List;