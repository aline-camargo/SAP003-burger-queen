import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import { db } from '../util/firebaseConfig';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';

const Kitchen = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        db.collection('new-order').orderBy("time", "desc").get()
        .then((querySnapshot) => {
            const orders = [];
            querySnapshot.forEach(doc => {
                const data = doc.data();
                data.id = doc.id
                orders.push(data)
            })
            setOrders(orders)
        })
    }, [])

    const handleClick = (e) => {
        console.log(e.target.id)
        const index = e.target.parentElement.dataset.index;
        db.collection('to-deliver').add(orders[index])
        .then(console.log('foi'))
    };

    return (
        <>
            <Navbar />
            <div className={css(styles.container)}>
                {orders.map(element => {
                    return <OrderCard 
                        key={element.id}
                        id={element.id}
                        client={element.client}
                        table={element.table}
                        order={element.order}
                        onClick={handleClick}
                        index={orders.indexOf(element)}
                    />
                })}
            </div>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: '80px',
    },
    container: {
        marginTop: '60px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
})

export default Kitchen;