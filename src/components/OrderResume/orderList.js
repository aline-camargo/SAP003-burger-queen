import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { StyleSheet, css } from 'aphrodite/no-important';

const List = (props) => {
    const deleteItem = (e) => {
        const result = props.resume.filter(item => item.id !== +e.currentTarget.id)
        props.onDelete(result);
    }

    const renderListItems = () => {
        return props.resume.map(item => {
            if(item.title.includes('Hambúrguer')) {
                if(item.extras !== 'Nenhum') {
                    return <div key={Math.random()} className={css(styles.item)}>
                    <p className={css(styles.p)}>{item.title} ({item.flavour.substring(0, 3)}) + {item.extras}</p>
                    <div className={css(styles.flex)}>
                        <p className={css(styles.p)}>R$ {item.price}</p>
                        <button type='button' className={css(styles.delete)} id={item.id} onClick={(e) => deleteItem(e)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
                } else {
            return <div key={Math.random()} className={css(styles.item)}>
                    <p className={css(styles.p)}>{item.title} ({item.flavour.substring(0, 3)})</p>
                    <div className={css(styles.flex)}>
                        <p className={css(styles.p)}>R$ {item.price}</p>
                        <button type='button' className={css(styles.delete)} id={item.id} onClick={(e) => deleteItem(e)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
                }
            } else {
            return <div key={Math.random()} className={css(styles.item)}>
                    <p className={css(styles.p)}>{item.title}</p>
                    <div className={css(styles.flex)}>
                        <p className={css(styles.p)}>R$ {item.price}</p>
                        <button type='button' className={css(styles.delete)} id={item.id} onClick={(e) => deleteItem(e)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
        }})
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
    p: {
        display: 'inline',
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
    }
})

export default List;