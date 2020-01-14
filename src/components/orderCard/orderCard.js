import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import OrderItem from './orderItem';
import Button from '../primaryButton';

const OrderCard = (props) => {
  const renderListItems = () => {
    return props.element.order.map((item) => {
      let title = '';
      if (
        item.title.includes('Hambúrguer') &&
        item.selectedExtras !== 'Nenhum'
      ) {
        title = [
          item.title,
          ' (',
          item.selectedFlavour.substring(0, 3),
          ')',
          ' + ',
          item.selectedExtras
        ];
      } else if (
        item.title.includes('Hambúrguer') &&
        item.selectedExtras === 'Nenhum'
      ) {
        title = [item.title, ' (', item.selectedFlavour.substring(0, 3), ')'];
      } else {
        title = item.title;
      }
      return (
        <OrderItem
          kitchen={props.element.kitchen}
          done={props.element.done}
          price={item.price}
          quantity={item.quantity}
          title={title}
          key={item.id}
        />
      );
    });
  };

  const spanClass = css(props.time > 15 ? styles.red : styles.regular);

  return (
    <article key={props.element.id} className={css(styles.article)}>
      <div className={css(styles.title)}>
        <h4 className={css(styles.header)}>
          Cliente: {props.client.name}, {props.client.table}
          <br></br>
          Atendente: {props.element.atendent}
        </h4>
        {props.element.kitchen || props.element.done ? (
          <span className={spanClass}>
            {props.time}m <FontAwesomeIcon icon={faClock} />
          </span>
        ) : (
          <span className={css(styles.regular)}>
            Total <br></br> R${' '}
            {props.element.order.reduce(
              (acc, curr) => acc + curr.price * curr.quantity,
              0
            )}
          </span>
        )}
      </div>
      <div className={css(styles.list)}>{renderListItems()}</div>
      {props.element.done ? (
        <p className={css(styles.total)}>
          Total R${' '}
          {props.element.order.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          )}
        </p>
      ) : (
        <Button
          id={props.element.id}
          class={css(styles.button)}
          onClick={props.onClick}
          title='Pronto'
        />
      )}
    </article>
  );
};

OrderCard.propTypes = {
  time: PropTypes.number,
  onClick: PropTypes.func,
  element: PropTypes.object,
  client: PropTypes.object
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
  }
});

export default OrderCard;
