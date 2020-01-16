import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import OrderItem from './orderItem';
import Button from '../primaryButton';
import itemsTitle from '../parsingTitle';

const OrderCard = ({ element, client, time, onClick }) => {
  const spanClass = css(time > 15 ? styles.red : styles.regular);

  return (
    <article key={element.id} className={css(styles.article)}>
      <div className={css(styles.title)}>
        <h4 className={css(styles.header)}>
          Cliente: {client.name}, {client.table}
          <br></br>
          Atendente: {element.atendent}
        </h4>
        {element.location === 'kitchen' || element.location === 'delivered' ? (
          <span className={spanClass}>
            {time}m <FontAwesomeIcon icon={faClock} />
          </span>
        ) : (
            <span className={css(styles.regular)}>
              Total <br></br> R${' '}
              {element.order.reduce(
                (acc, curr) => acc + curr.price * curr.quantity,
                0
              )}
            </span>
          )}
      </div>
      <div className={css(styles.list)}>
        {element.order.map((item, index) => {
          return <OrderItem
            key={item.id}
            style={{
              quantity: css(styles.quantity),
              item: css(styles.item),
              title: css(styles.titleItem),
              price: css(styles.price),
            }}
            location={element.location}
            item={item}
          >
            {itemsTitle(element.order)[index]}
          </OrderItem>
        })}
      </div>
      {element.location === 'delivered' ? (
        <p className={css(styles.total)}>
          Total R${' '}
          {element.order.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          )}
        </p>
      ) : (
          <Button
            style={css(styles.button)}
            onClick={onClick}
          >
            Pronto
        </Button>
        )}
    </article>
  );
};

OrderCard.propTypes = {
  time: PropTypes.number,
  onClick: PropTypes.func,
  element: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  button: {
    background: '#57ad1c',
    color: 'white',
    border: '2px solid #57ad1c',
    width: '100%',
    padding: '0.1em',
    fontSize: '1.5em',
    borderRadius: '6px',
    marginTop: '0.25em',
    ':hover': {
      cursor: 'pointer'
    }
  },
  article: {
    height: '300px',
    padding: '0.5em',
    width: '310px',
    background: '#9f4400',
    borderRadius: '6px',
    margin: '1.5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    display: 'inline'
  },
  list: {
    overflow: 'auto',
    background: '#cb6023',
    borderRadius: '6px',
    width: '100%',
    height: '69%'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white'
  },
  total: {
    textAlign: 'center',
    padding: '0.1em',
    fontSize: '1.5em',
    border: '2px solid rgb(203, 96, 35)',
    borderRadius: '6px',
    color: 'white',
    background: 'rgb(203, 96, 35)'
  },
  regular: {
    padding: '0.3em',
    borderRadius: '6px',
    textAlign: 'center'
  },
  red: {
    padding: '0.3em',
    borderRadius: '6px',
    background: '#e61f1f'
  },
  quantity: {
    background: '#f7f5f5',
    padding: '1px 4px',
    borderRadius: '3px',
    fontWeight: 'bold',
    marginRight: '5px'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5em',
    borderBottom: '1px solid #ffffff26'
  },
  titleItem: {
    color: 'white',
    lineHeight: '1.5em'
  },
  price: {
    color: 'white',
    width: '75px',
    textAlign: 'end'
  }
});

export default OrderCard;
