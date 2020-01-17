import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import itemsTitle from '../../../components/parsingTitle';
import OrderItem from '../../../components/orderCard/orderItem';

const List = ({ resume, onDelete }) => {
  return (
    <>
      <div id='orderList' className={css(styles.list)}>
        {resume.map((item, index) => {
          return <OrderItem
            key={item.id}
            style={{
              item: css(styles.item),
              title: css(styles.itemTitle),
              quantity: css(styles.quantity),
              flex: css(styles.flex),
              delete: css(styles.delete)
            }}
            item={item}
            onClick={() => onDelete(item.id)}
            buttonTitle={<FontAwesomeIcon icon={faTrashAlt} />}
          >
            {itemsTitle(resume)[index]}
          </OrderItem>
        })}
      </div>
      <div className={css(styles.total)}>
        <p className={css(styles.title)}>Total:</p>
        <p className={css(styles.result)}>
          R${''}
          {resume.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          )}
        </p>
      </div>
    </>
  );
};

List.propTypes = {
  resume: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  list: {
    overflow: 'auto',
    height: '55%',
    width: '90%',
    marginTop: '20px',
    borderRadius: '6px',
    background: '#e174095e',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column'
  },
  total: {
    height: 'max-content',
    width: '90%',
    justifyContent: 'space-between',
    display: 'flex',
    alignSelf: 'center',
    border: '2px solid #E17409',
    padding: '7px',
    borderRadius: '6px',
    marginTop: '2%'
  },
  title: {
    color: '#A62F03',
    display: 'inline',
    fontSize: '1.7em'
  },
  result: {
    fontSize: '1.7em',
    display: 'inline'
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1em'
  },
  delete: {
    border: 'none',
    background: 'none',
    fontSize: '20px',
    marginLeft: '8px',
    color: '#201e1e'
  },
  flex: {
    display: 'flex'
  },
  quantity: {
    background: '#9f440085',
    padding: '1px 4px',
    borderRadius: '3px',
    fontWeight: 'bold',
    marginRight: '5px'
  }
});

export default List;
