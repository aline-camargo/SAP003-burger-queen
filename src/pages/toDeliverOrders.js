import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../util/firebaseConfig';
import notification from '../components/notifications';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';
import Title from '../components/title';

const ToDeliverOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        db.collection('to-deliver').orderBy("time", "desc")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                data.id = doc.id
                setOrders((currentState)=> [...currentState, data])
            })
        })
    }, [])

    const handleClick = (e) => {
        const id = e.target.id;
        const index = e.target.parentElement.dataset.index;

        notification({
            title: "Aguarde",
            message: "Pedido sendo enviado.",
            type: "info",
        })

        orders[index].done = true;
        
        db.collection('delivered').add(orders[index])
        .then(
            db.collection('to-deliver').doc(id)
            .delete().catch(error =>  {
                notification({
                    title: "Falha em remover da área de entrega.",
                    message: error,
                    type: "danger",
                })
            })
        ).then(
            notification({
                title: "Pedido finalizado com sucesso!",
                message: "Obrigada!",
                type: "success",
            })
        ).then(setOrders([]))
    }

    return (
        <>
            <Navbar />
            <div className={css(styles.container)}>
            <Title 
                title='Pedidos para entrega'
            />
            {orders.map(element => {
                    return <OrderCard 
                        key={element.id}
                        id={element.id}
                        client={element.client}
                        table={element.table}
                        order={element.order}
                        onClick={handleClick}
                        index={orders.indexOf(element)}
                        time={element.passed}
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

export default ToDeliverOrders;