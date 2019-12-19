import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import notification from '../components/notifications';
import { db } from '../util/firebaseConfig';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';
import Title from '../components/title';

const Kitchen = () => {
    const [orders, setOrders] = useState([])
    const [time, setTime] = useState(new Date().getTime())

    useEffect(() => {
        db.collection('new-order').orderBy("time", "desc")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                data.id = doc.id
                setOrders((currentState)=> [...currentState, data])
            })
        })

        const counter = setInterval(() => setTime(new Date().getTime()),60000)
        return () => clearInterval(counter)
    }, [])

    const handleClick = (e) => {
        const id = e.target.id;
        const index = e.target.parentElement.dataset.index;

        notification({
            title: "Aguarde",
            message: "Pedido sendo enviado.",
            type: "info",
        })
        
        orders[index].passedTime = Math.floor((time - orders[index].time) / 60000)
        orders[index].kitchen = false;
        
        db.collection('to-deliver').add(orders[index])
        .then(
            db.collection('new-order').doc(id)
            .delete().catch(error =>  {
                notification({
                    title: "Falha em remover da cozinha.",
                    message: error,
                    type: "danger",
                })
            })
        ).then(
            notification({
                title: "Pedido enviado com sucesso!",
                message: "Obrigada!",
                type: "success",
            })
            ).then(setOrders([]))
    };

    return (
        <>
            <Navbar />
            <div className={css(styles.container)}>
            <Title 
                title='Cozinha'
            />
                {orders.map(element => {
                    const passedTime = Math.floor((time - element.time) / 60000)
                    return <OrderCard 
                        key={element.id}
                        id={element.id}
                        client={element.client}
                        table={element.table}
                        order={element.order}
                        onClick={handleClick}
                        kitchen={element.kitchen}
                        index={orders.indexOf(element)}
                        time={passedTime}
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