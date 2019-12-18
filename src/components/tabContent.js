import React, { useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../util/firebaseConfig';
import IdButton from './buttons/idButton';
import BurguerButton from './buttons/burguerItem';

const TabContent = (props) => {
    const [cafeItems, setCafeItems] = useState([]);
    const [dayItems, setDayItems] = useState([]);
    const [burguers, setBurguers] = useState([]);

    useEffect(() => {
        db.collection('menu').orderBy("title", "desc").get()
            .then((querySnapshot) => {
                const cafeItems = [];  
                const dayItems = [];
                const burguers = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    data.id = doc.id
                    if (data.breakfast) {
                        cafeItems.push(data);
                    } else {
                        (data.flavour.length === 3) ? burguers.push(data) : dayItems.push(data);
                    }
                });
            setCafeItems(cafeItems);
            setDayItems(dayItems);
            setBurguers(burguers);
        })
    }, [])

    const buttons = (itensArray) => { 
        return itensArray.map(item => {
            return <IdButton
            class={css(styles.button)}
            title={[item.title, <p key >{item.price}</p>]}
            id={item.id}
            key={item.id}
            onClick={props.onClickItem}
            />
    })
    }

    const burguersTemplate = (itensArray) => {
        if(!props.show) {            
        return itensArray.map(item => {
            return <BurguerButton
            title={item.title}
            price={item.price}
            id={item.id}
            key={item.id}
            extras={item.extras}
            flavour={item.flavour}
            onClick={props.onClickBurguer}
            functionOk={props.onClickItem}
            onChange={props.onChange}
            />
        })
    }
    }
    
    const renderMenu = () => {
        if (props.show) {
            return buttons(cafeItems)
        } else {
            return buttons(dayItems);
        }
    }
    
    return (
        <section className={css(styles.container)}>
            {renderMenu()}
            {burguersTemplate(burguers)}
        </section>
    );
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
        ':hover':{
            cursor: 'pointer',
        }
    }
})

export default TabContent;