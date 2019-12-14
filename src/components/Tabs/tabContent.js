import React, { useEffect, useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../../util/firebaseConfig';
// import firebase from 'firebase';
import ItemsButton from '../buttons/itemsButtons';

const TabContent = (props) => {
    const [cafeItems, setCafeItems] = useState([]);
    const [dayItems, setDayItems] = useState([]);

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
                onClick={props.onClick}
                />
            })
        } else {
            return  dayItems.map(item => {
                return<ItemsButton
                title={item.title}
                price={item.price}
                id={item.id}
                key={item.id}
                onClick={props.onClick}
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