import React from 'react';
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
                <p className={props.class.p}>R$ {props.price}</p>
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

export default OrderedItem;