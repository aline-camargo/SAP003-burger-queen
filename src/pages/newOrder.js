import React, { useState } from 'react';
import Navbar from '../components/Navbar/navbar';
import ResumeArea from '../components/OrderResume/OrderResume';
import MenuArea from '../components/MenuArea/MenuArea';
import { StyleSheet, css } from 'aphrodite/no-important';

const NewOrder = () => {
    const [order, setOrder] = useState([]);
    const [flavour, setFlavour] = useState('Bovino');
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
        const optionsStyle = e.currentTarget.nextElementSibling.style;
        if (!optionsStyle.display || optionsStyle.display === 'none') { 
            optionsStyle.display = 'flex';
        } else {
            optionsStyle.display = 'none';
        }
    }

    const updateItems = (resume) => {
        setOrder(resume)
    }

    const saveItems = (e) => {
        const pseudoId = new Date().getTime();
        if (e.currentTarget.name) {
            const value = e.currentTarget.parentElement.firstElementChild.textContent.split('R$ ');
            const isRepeatedBurg = order.findIndex(elem => elem.title === value[0] && elem.flavour === flavour && elem.extras === extras);
            if (isRepeatedBurg !== -1){
                const repeatedBurg = order.map(item => {
                    if (order.indexOf(item) === isRepeatedBurg) {
                        item.quantity++
                        item.price = Number(item.originalPrice) * item.quantity
                    } 
                    return item;
                });
                setOrder(repeatedBurg)
            } else {
                if (extras !== 'Nenhum') {
                    value[1]++
                } 
                    setOrder([
                        ...order,
                        {
                            title: value[0],
                            price: value[1],
                            originalPrice: value[1],
                            quantity: 1,
                            flavour: flavour,
                            extras: extras,
                            id: pseudoId,
                        }
                    ])
            }
           
            e.currentTarget.parentElement.style.display = 'none';
        } else {
            const value = e.currentTarget.textContent.split('R$ ');
            const isRepeated = order.findIndex(elem => elem.title === value[0]);

            if (isRepeated !== -1){
                const repeated = order.map(item => {
                    if (order.indexOf(item) === isRepeated) {
                        item.quantity++
                        item.price = Number(item.originalPrice) * item.quantity
                    } 
                    return item;
                });
                setOrder(repeated)
            } else {
                setOrder([
                    ...order,
                    {
                        title: value[0],
                        price: value[1],
                        originalPrice: value[1],
                        quantity: 1,
                        id: pseudoId,
                    }
                ])
            }
        }
    }

    return (
        <>
        <Navbar />
        <div className={css(styles.container)}>
            <MenuArea 
                onClickItem={saveItems}
                onClickBurguer={handleBurguerClick}
                onChange={onChangeRadio}
            />
            <ResumeArea 
                resume={order}
                onUpdate={updateItems}
            />
        </div>
        </>
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