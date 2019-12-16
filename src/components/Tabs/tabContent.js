import React, { useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../../util/firebaseConfig';
import ItemsButton from '../buttons/itemsButtons';
import BurguerButton from '../buttons/burguerItem';

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
            return <ItemsButton
            title={item.title}
            price={item.price}
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
        <article className={css(styles.container)}>
            {renderMenu()}
            {burguersTemplate(burguers)}
        </article>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: '1em 0',
        display: 'flex',
        flexWrap: 'wrap'
    }
})

export default TabContent;