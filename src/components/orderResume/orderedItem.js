import React from 'react';
import PropTypes from  'prop-types';
import IdButton from '../buttons/idButton';

const OrderedItem = (props) =>{
    return (
        <div key={Math.random()} className={props.class.item}>
            <p className={props.class.p}>
                <span className={props.class.quantity}>
                    {props.quantity}
                </span>
                {props.title}
            </p>
            <div className={props.class.flex}>
                <p className={props.class.p}>R$ {props.price * props.quantity}</p>
                <IdButton 
                    class={props.class.delete}
                    id={props.id}
                    onClick={props.onClick}
                    key={props.id}
                    title={props.buttonTitle}
                />
            </div>
        </div>
    )
}

OrderedItem.propTypes = {
    quantity: PropTypes.number,
    class: PropTypes.object,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    id: PropTypes.string,
    onClick: PropTypes.func,
    buttonTitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ])
}

export default OrderedItem;