import React from 'react';
import IdButton from '../buttons/idButton';
import { StyleSheet, css } from 'aphrodite/no-important';
import OrderItem from './orderItem';

const OrderCard = (props) => {

    const renderListItems = () => {
        return props.order.map(item => {
            let title = '';
            if(item.title.includes('Hambúrguer') && item.extras !== 'Nenhum') {
                title = [item.title, '(', item.flavour.substring(0, 3), ')', ' + ', item.extras]
            } else if (item.title.includes('Hambúrguer') && item.extras === 'Nenhum') {
                title = [item.title, '(', item.flavour.substring(0, 3), ')']
            } else {
                title = item.title
            }
        return <OrderItem
            kitchen={props.kitchen}
            done={props.done}
            price={item.price}
            quantity={item.quantity}
            title={title}
            key={item.id}
        />
    })
    }

    return (
        <article key={props.id} className={css(styles.article)} data-index={props.index}>
            <div className={css(styles.title)}>
                <h3 className={css(styles.header)}>{props.client}, {props.table}</h3>
                {
                    (props.kitchen || props.done) 
                    ? <span>{props.time}m</span>
                    : <span>Total R$ {props.order.reduce((acc, curr) => acc + Number(curr.price), 0)}</span>
                }
            </div>
            <div className={css(styles.list)}>
            {renderListItems()}
            </div>
            {
                props.done 
                ? <p className={css(styles.total)}>Total R$ {props.order.reduce((acc, curr) => acc + Number(curr.price), 0)}</p>
                : <IdButton
                    id={props.id}
                    class={css(styles.button)}
                    onClick={props.onClick}
                    title='Pronto'
                />
            }
        </article>
    );
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
        ':hover':{
            cursor: 'pointer',
        }
    },
    article: {
        height: '300px',
        padding: '0.5em',
        width: '310px',
        background: '#9f4400',
        borderRadius: '6px',
        margin: '1.5%',
   },
   header: {
        display: 'inline',
   },
   list: {
        overflow: 'auto',
        background: '#cb6023',
        borderRadius: '6px',
        padding: '0.5em',
        width: '100%',
        height: '75%',
   },
   title: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5em',
        color: 'white',
   },
   total: {
        textAlign: 'center',
        padding: '0.1em',    
        fontSize: '1.5em',    
        border: '2px solid rgb(203, 96, 35)',    
        marginTop: '0.25em',    
        borderRadius: '6px',    
        color: 'white',    
        background: 'rgb(203, 96, 35)',
   }
})

export default OrderCard;