import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import ResumeArea from '../components/orderResume/orderResume';
import MenuArea from '../components/menuArea';
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

    const saveItems = (e, item) => {
        if (item.title.includes('Hambúrguer')) {
            const isRepeatedBurg = order.findIndex(elem => elem.title === item.title && elem.selectedFlavour === flavour && elem.selectedExtras === extras);
            if (isRepeatedBurg !== -1){
                order[isRepeatedBurg].quantity++
                setOrder([...order])
            } else {
                const newItem = Object.assign({
                    id: item.id+new Date().getTime(),
                    selectedExtras: extras,
                    selectedFlavour: flavour,
                }, item)
                if (extras !== 'Nenhum') {
                    newItem.price++
                }
                setOrder([...order, newItem])
            }
            e.currentTarget.parentElement.style.display = 'none';
        } else {
            const isRepeated = order.findIndex(elem => elem.title === item.title);
            if (isRepeated !== -1){
                order[isRepeated].quantity++
                setOrder([...order])
            } else {
                const newItem = Object.assign({}, item)
                setOrder([...order, newItem])
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