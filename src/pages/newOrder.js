import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import ResumeArea from '../components/OrderResume/OrderResume';
import MenuArea from '../components/MenuArea/MenuArea';
import { StyleSheet, css } from 'aphrodite/no-important';

const NewOrder = () => {
    const [order, setOrder] = useState([]);

    const handleClick = (e) => {
        const value = e.currentTarget.textContent.split('R$ ');
        setOrder([
            ...order,
            {
                title: value[0],
                price: value[1],
            }
        ])
        
        // db.collection('new-order').add(order)
    };

    return (
        <main>
        <Navbar />
        <div className={css(styles.container)}>
            <MenuArea 
                onClick={handleClick}
            />
            <ResumeArea 
                resume={order}
            />
        </div>
        </main>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '90vh',
        marginBottom: '0',
    }
})

export default NewOrder;