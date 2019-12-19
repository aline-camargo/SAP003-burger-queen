import React, { useEffect, useState } from 'react';
import { db } from '../util/firebaseConfig';
import { StyleSheet, css } from 'aphrodite/no-important';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';

const DeliveredOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        db.collection('delivered').orderBy("time", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                data.id = doc.id
                setOrders((currentState)=> [...currentState, data])
            })
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className={css(styles.container)}>
                <h1 className={css(styles.heading)}>Pedidos entregues</h1>
                {orders.map(element => {
                    return <OrderCard 
                        key={element.id}
                        id={element.id}
                        client={element.client}
                        table={element.table}
                        order={element.order}
                        done={element.done}
                        index={orders.indexOf(element)}
                        time={element.passedTime}
                    />
                })}
            </div>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '60px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    heading: {
        height: 'max-content',
        width: '94%',
        padding: '0.5em',
        color: 'rgb(166, 47, 3)',
        borderBottom: '2px solid rgb(225, 116, 9)',
    }
})

export default DeliveredOrders;