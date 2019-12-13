import React, { useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../../util/firebaseConfig';
// import firebase from 'firebase';
import ItemsButton from '../buttons/itemsButtons';

const TabContent = (props) => {
    const [cafeItems, setCafeItems] = useState([]);
    const [dayItems, setDayItems] = useState([]);

    const handleClick = (e) => {
        const value = e.currentTarget.textContent.split('R$ ');
        console.log('title:', value[0])
        console.log('price:', value[1])
        // db.collection('new-order').add({
        //     price: e.currentTarget.textContent
        // })
    };

    useEffect(() => {
        db.collection('menu').orderBy("title", "desc").get()
            .then((querySnapshot) => {
                const cafeItems = [];  
                const dayItems = [];  
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    data.id = doc.id
                    if (data.breakfast) {
                        cafeItems.push(data);
                    } else {
                        dayItems.push(data);
                    }
                });
            setCafeItems(cafeItems);
            setDayItems(dayItems);
        })
    }, [])
    
    const renderMenu = () => {
        if (props.show) {
            return cafeItems.map(item => {
                return<ItemsButton
                title={item.title}
                price={item.price}
                id={item.id}
                key={item.id}
                onClick={handleClick}
                />
            })
        } else {
            return  dayItems.map(item => {
                return<ItemsButton
                title={item.title}
                price={item.price}
                id={item.id}
                key={item.id}
                onClick={handleClick}
                />
            })
        }
    }
    
    return (
        <article className={css(styles.container)}>
            {renderMenu()}
        </article>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: '1em 0',
    }
})

export default TabContent;