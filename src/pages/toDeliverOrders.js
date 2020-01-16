import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import notification from '../components/notifications';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';
import Title from '../components/title';
import { onSnapshot, forward } from '../util/onSnapshot';

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

    orders[index].location = 'delivered';

    forward(
      'delivered',
      orders[index],
      'to-deliver',
      id,
      'área de entrega',
      setOrders
    );
  };

  return (
    <>
      <Navbar />
      <div className={css(styles.container)}>
        <Title>Pedidos para entrega</Title>
        {orders.map((element,index) => {
          return (
            <OrderCard
              key={element.id}
              element={element}
              client={element.client}
              onClick={() => handleClick(element.id, index)}
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
