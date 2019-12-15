import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import ResumeArea from '../components/OrderResume/OrderResume';
import MenuArea from '../components/MenuArea/MenuArea';
import { StyleSheet, css } from 'aphrodite/no-important';

const NewOrder = () => {
    const [order, setOrder] = useState([]);
    const [flavour, setFlavour] = useState('Boi');
    const [extras, setExtras] = useState('Queijo');

    const onChangeRadio = (e) => {
        const type = e.target.parentElement.parentElement.firstElementChild.textContent;
        if (type === 'Sabor:') {
            setFlavour(e.target.id);
        } else {
            setExtras(e.target.id);
        }
    }

    const handleBurguerClick = (e) => {
        if (e.currentTarget.name) {
            e.currentTarget.parentElement.parentElement.style.display = 'none';
        } else {
        e.currentTarget.nextElementSibling.style.display = 'block';
        }
    }

    const saveItems = (e) => {
        if (e.currentTarget.name) {
            const value = e.currentTarget.parentElement.parentElement.firstElementChild.textContent.split('R$ ');
            if (extras !== 'Nenhum') {
                value[1]++
            }
            setOrder([
                ...order,
                {
                    title: value[0],
                    price: value[1],
                    flavour: flavour,
                    extras: extras,
                }
            ])
        } else {
            const value = e.currentTarget.textContent.split('R$ ');
            setOrder([
                ...order,
                {
                    title: value[0],
                    price: value[1],
                }
            ])
        }
    }

    const handleClick = (e) => {
        if (e.currentTarget.textContent.includes('Hambúrguer')) {
            handleBurguerClick(e)
        } else {
            saveItems(e)
    }
        // db.collection('new-order').add(order)
    };

    return (
        <main>
        <Navbar />
        <div className={css(styles.container)}>
            <MenuArea 
                onClick={handleClick}
                onChange={onChangeRadio}
                functionOk={saveItems}
                functionCancel={handleBurguerClick}
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