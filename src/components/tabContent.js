import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../util/firebaseConfig';
import PropTypes from 'prop-types';
import BurguerOptions from './burguerOptions';
import Button from './primaryButton';

const TabContent = ({ show, onClickItem, onClickBurguer, onChange, burguer }) => {
  const [cafeItems, setCafeItems] = useState([]);
  const [dayItems, setDayItems] = useState([]);
  const [burguers, setBurguers] = useState([]);

  useEffect(() => {
    db.collection('menu')
      .orderBy('title', 'desc')
      .get()
      .then((querySnapshot) => {
        const addingID = querySnapshot.docs.map(doc => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        })
        const cafe = addingID.filter(doc => doc.breakfast);
        const day = addingID.filter(doc => !doc.breakfast && doc.flavour.length === 1);
        const burguers = addingID.filter(doc => doc.flavour.length === 3);
        setCafeItems(cafe);
        setBurguers(burguers);
        setDayItems(day);
      });
  }, []);

  const buttons = (itensArray) => {
    return itensArray.map((item) => {
      return (
        <Button
          key={item.id}
          style={css(styles.button)}
          onClick={() => onClickItem(item)}
        >
          {item.title}
          <p>R$ {item.price}</p>
        </Button>
      );
    });
  };

  const burguersTemplate = (itensArray) => {
    if (!show) {
      return itensArray.map((item) => {
        return (
          <Button
            key={item.id}
            style={css(styles.button)}
            onClick={() => onClickBurguer(item)}
          >
            {item.title}
            <p>R$ {item.price}</p>
          </Button>
        );
      });
    }
  };

  const renderMenu = () => {
    if (show) {
      return buttons(cafeItems);
    } else {
      return buttons(dayItems);
    }
  };

  return (
    <section className={css(styles.container)}>
      {renderMenu()}
      {burguersTemplate(burguers)}
      {burguer.show ? (
        <BurguerOptions
          hamburguer={burguer.item}
          onChange={onChange}
          functionOk={() => onClickItem(burguer.item)}
        />
      ) : null}
    </section>
  );
};

TabContent.propTypes = {
  onClickItem: PropTypes.func.isRequired,
  onClickBurguer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  burguer: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: '1em 0',
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    color: 'white',
    background: '#9f4400',
    border: 'none',
    padding: '1em',
    borderRadius: '6px',
    marginRight: '10px',
    margin: '0px 10px 10px 0',
    fontSize: '0.9em',
    ':hover': {
      cursor: 'pointer'
    },
    ':active': {
      background: '#57ad1c'
    }
  }
});

export default TabContent;
