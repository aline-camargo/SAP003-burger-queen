import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import ResumeArea from '../components/orderResume/orderResume';
import MenuArea from '../components/menuArea';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../util/firebaseConfig';
import notification from '../components/notifications';

const NewOrder = () => {
  const [order, setOrder] = useState([]);
  const [showBurguer, setShowBurguer] = useState({ show: false, item: {} });
  const [options, setOptions] = useState({ extras: 'Queijo', flavour: 'Bovino' });

  useEffect(() => {
    db.collection('kitchen').onSnapshot(
      { includeMetadataChanges: !navigator.onLine },
      (querySnapshot) => {
        const removed = querySnapshot
          .docChanges()
          .findIndex((change) => change.type === 'removed');
        if (removed !== -1) {
          notification({
            title: 'Pedido pronto.',
            message: 'Um pedido aguarda para ser entregue.',
            type: 'warning'
          });
        }
      }
    );
  }, []);

  const onChangeRadio = (selected, type) => {
    setOptions((state) => ({ ...state, [type]: selected }));
  };

  const handleBurguerClick = (choice) => {
    if (showBurguer.item === choice) {
      setShowBurguer((state) => ({ ...state, show: !showBurguer.show }));
    } else if (showBurguer.item.price === undefined) {
      setShowBurguer({ show: true, item: choice });
    } else {
      setShowBurguer((state) => ({ ...state, item: choice }));
    }
  };

  const updateItems = (resume) => {
    setOrder(resume);
  };

  const saveItems = (item) => {
    if (item.title.includes('Hambúrguer')) {
      const isRepeatedBurg = order.findIndex(
        (elem) =>
          elem.title === item.title &&
          elem.selectedFlavour === options.flavour &&
          elem.selectedExtras === options.extras
      );
      if (isRepeatedBurg !== -1) {
        order[isRepeatedBurg].quantity++;
        setOrder([...order]);
      } else {
        const newItem = Object.assign(
          {
            selectedExtras: options.extras,
            selectedFlavour: options.flavour
          },
          item,
          {
            id: item.id + new Date().getTime()
          }
        );
        if (options.extras !== 'Nenhum') {
          newItem.price++;
        }
        setOrder([...order, newItem]);
      }
      setShowBurguer({ show: false, item: {} });
      setOptions({ extras: 'Queijo', flavour: 'Bovino' });
    } else {
      const isRepeated = order.findIndex((elem) => elem.title === item.title);
      if (isRepeated !== -1) {
        order[isRepeated].quantity++;
        setOrder([...order]);
      } else {
        const newItem = Object.assign({}, item);
        setOrder([...order, newItem]);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className={css(styles.container)}>
        <MenuArea
          onClickItem={saveItems}
          onClickBurguer={handleBurguerClick}
          onChange={onChangeRadio}
          burguer={showBurguer}
        />
        <ResumeArea resume={order} onUpdate={updateItems} />
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '90vh',
    marginBottom: '0'
  }
});

export default NewOrder;
