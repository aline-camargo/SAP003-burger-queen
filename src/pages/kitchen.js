import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import notification from '../components/notifications';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';
import Title from '../components/title';
import { onSnapshot, forward } from '../util/onSnapshot';

const Kitchen = () => {
  const [orders, setOrders] = useState([]);
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    onSnapshot('kitchen', setOrders);

    const counter = setInterval(() => setTime(new Date().getTime()), 60000);
    return () => clearInterval(counter);
  }, []);

  const handleClick = (id, index) => {
    notification({
      title: 'Aguarde',
      message: 'Pedido sendo enviado.',
      type: 'info'
    });

    orders[index].passedTime = Math.floor((time - orders[index].time) / 60000);
    orders[index].kitchen = false;

    forward(
      'to-deliver',
      orders[index],
      'kitchen',
      id,
      'cozinha',
      setOrders
    );
  };

  return (
    <>
      <Navbar />
      <div className={css(styles.container)}>
        <Title title='Cozinha' />
        {orders.map((element) => {
          const passedTime = Math.floor((time - element.time) / 60000);
          return (
            <OrderCard
              element={element}
              client={element.client}
              key={element.id}
              onClick={() => handleClick(element.id, orders.indexOf(element))}
              time={passedTime <= 0 ? 0 : passedTime}
            />
          );
        })}
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: '80px'
  },
  container: {
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

export default Kitchen;
