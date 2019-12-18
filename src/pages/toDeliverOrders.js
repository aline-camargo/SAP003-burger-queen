import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../util/firebaseConfig';
import { store } from 'react-notifications-component';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';

const ToDeliverOrders = () => {
    const [orders, setOrders] = useState([])

    const notification = (obj) => {
        store.addNotification({
            title: obj.title,
            message: obj.message,
            type: obj.type,
            insert: "top",
            container: "top-center",
            animationIn: ["animated", "fadeInDown"],
            animationOut: ["animated", "fadeOutUp"],
            dismiss: {
              duration: 1500,
            }
          });
    }

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
        )
    }

    return (
        <>
            <Navbar />
            <div className={css(styles.container)}>
            <h1 className={css(styles.heading)}>Pedidos para entrega</h1>
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
    },
    heading: {
        height: 'max-content',
        width: '94%',
        padding: '0.5em',
        color: 'rgb(166, 47, 3)',
        borderBottom: '2px solid rgb(225, 116, 9)',
    }
})

export default ToDeliverOrders;