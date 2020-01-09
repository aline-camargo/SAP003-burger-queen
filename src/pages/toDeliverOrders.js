import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import notification from '../components/notifications';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';
import Title from '../components/title';
import { onSnapshot, forward } from '../onsnapshot';

const ToDeliverOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    onSnapshot('to-deliver', setOrders);
  }, []);

  const handleClick = (id, index) => {
    notification({
      title: 'Aguarde',
      message: 'Pedido sendo enviado.',
      type: 'info'
    });

    orders[index].done = true;

    forward('delivered', 'to-deliver', orders[index], id, 'área de entrega', setOrders);
  };

  return (
    <>
      <Navbar />
      <div className={css(styles.container)}>
        <Title title='Pedidos para entrega' />
        {orders.map((element) => {
          return (
            <OrderCard
              element={element}
              key={element.id}
              onClick={() => handleClick(element.id, orders.indexOf(element))}
            />
          );
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
    flexWrap: 'wrap'
  }
});

export default ToDeliverOrders;
