import React, { useEffect, useState } from 'react';
import { db } from '../util/firebaseConfig';
import { StyleSheet, css } from 'aphrodite/no-important';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';
import Title from '../components/title';

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
            <Title 
                title='Pedidos entregues'
            />
                {orders.map(element => {
                    return <OrderCard 
                        key={element.id}
                        time={element.passedTime}
                        id={element.id}
                        client={element.client}
                        table={element.table}
                        order={element.order}
                        done={element.done}
                        index={orders.indexOf(element)}
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
    }
})

export default DeliveredOrders;