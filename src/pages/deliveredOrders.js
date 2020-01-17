import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';
import Title from '../components/title';
import { onSnapshot } from '../util/onSnapshot';

const DeliveredOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    onSnapshot('delivered', setOrders);
  }, []);

  return (
    <>
      <Navbar />
      <div className={css(styles.container)}>
        <Title>Pedidos entregues</Title>
        {orders.map((element) => {
          return (
            <OrderCard
              key={element.id}
              element={element}
              client={element.client}
              time={element.passedTime}
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

export default DeliveredOrders;
