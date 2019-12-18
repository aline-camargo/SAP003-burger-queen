import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { StyleSheet, css } from 'aphrodite/no-important';
import OrderedItem from './orderedItem';

const List = (props) => {
    const deleteItem = (e) => {
        const itemToDelete = props.resume.findIndex(elem => elem.id === +e.currentTarget.id);
        if (props.resume[itemToDelete].quantity !== 1) {
            const result = props.resume.map(item => {
                if (item.id === +e.currentTarget.id) {
                    item.quantity--
                    item.price = Number(item.originalPrice) * item.quantity
                }
                return item
            })
            props.onDelete(result);
        } else {
            const result = props.resume.filter(item => item.id !== +e.currentTarget.id)
            props.onDelete(result);
        }
    }

    const renderListItems = () => {
        return props.resume.map(item => {
            let title = '';
            if(item.title.includes('Hambúrguer') && item.extras !== 'Nenhum') {
                title = [item.title, '(', item.flavour.substring(0, 3), ')', ' + ', item.extras]
            } else if (item.title.includes('Hambúrguer') && item.extras === 'Nenhum') {
                title = [item.title, '(', item.flavour.substring(0, 3), ')']
            } else {
                title = item.title
            }
        return <OrderedItem 
            class={{
                item: css(styles.item),
                p: css(styles.p),
                quantity: css(styles.quantity),
                flex: css(styles.flex),
                delete: css(styles.delete),
            }}
            quantity={item.quantity}
            title={title}
            price={item.price}
            id={item.id}
            key={item.id}
            onClick={deleteItem}
            buttonTitle={<FontAwesomeIcon icon={faTrashAlt} />}
        />
    })
    }

    return (
        <>
            <div id="orderList" className={css(styles.list)}>
                {renderListItems()}
            </div>
            <div className={css(styles.total)}>
                <p className={css(styles.title)}>Total:</p>
                <p className={css(styles.result)}>R$ {props.resume.reduce((acc, curr) => acc + Number(curr.price), 0)}</p>
            </div>
        </>
    );
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
        flexDirection: 'column',
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
        marginTop: '2%',
    },
    title: {
        color: '#A62F03',
        display: 'inline',
        fontSize: '1.7em',
    },
    result: {
        fontSize: '1.7em',
        display: 'inline',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1em',
    },
    delete: {
        border: 'none',
        background: 'none',
        fontSize: '20px',
        marginLeft: '8px',
        color: '#201e1e',
    },
    flex: {
        display: 'flex',
    },
    quantity: {
        background: '#9f440085',
        padding: '1px 4px',
        borderRadius: '3px',
        fontWeight: 'bold',
        marginRight: '5px',
    }
})

export default List;