import React from 'react';
import Button from '../primaryButton';
import PropTypes from 'prop-types';

const OrderItem = ({ location, style, onClick, buttonTitle, children, item }) => {
  const checkItem = () => {
    if (location === 'to-deliver' || location === 'delivered') {
      return (
        <span className={style.price}>
          R$ {item.price * item.quantity}
        </span>
      )
    } else if (!location) {
      return (
        <div className={style.flex}>
          <p className={style.title}>R$ {item.price * item.quantity}</p>
          <Button
            style={style.delete}
            onClick={onClick}
          >
            {buttonTitle}
          </Button>
        </div>
      )
    } else {
      return null;
    }
  }
  return (
    <div className={style.item}>
      <p>
        <span className={style.quantity}>
          {item.quantity}
        </span>
        <span className={style.title}>
          {children}
        </span>
      </p>
      {checkItem()}
    </div>
  );
};

OrderItem.propTypes = {
  location: PropTypes.any,
  style: PropTypes.object,
  children: PropTypes.string.isRequired,
  item: PropTypes.object,
  onClick: PropTypes.func,
  buttonTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default OrderItem;
