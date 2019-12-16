import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../../util/firebaseConfig';
import Title from './title';
import Input from './input';
import List from './orderList';
import Button from '../buttons/confirmButton';

const ResumeArea = (props) => {
    const [ client, setClient ] = useState('');
    const [ table, setTable ] = useState('');
    
    const handleSubmit = () => {
        const notification = (props) => {
            store.addNotification({
                title: props.title,
                message: props.message,
                type: props.type,
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "fadeInDown"],
                animationOut: ["animated", "fadeOutUp"],
                dismiss: {
                  duration: 1500,
                }
              });
        }

        db.collection('new-order').add({
            client: client,
            table: table,
            order: props.resume,
            time: new Date().getTime(),
        })
        .then(() =>{
            notification({
                title: "Pedido enviado com sucesso!",
                message: "Obrigada!",
                type: "success",
            })
            setClient('');
            setTable('');
            props.onUpdate([]);
        })
        .catch(error => {
            notification({
                title: "Falha no envio",
                message: error,
                type: "danger",
            })
        });
    }
    
    return (
        <aside className={css(styles.container)}>
            <Title />
            <Input 
                id='clientName'
                title='Nome'
                value={client}
                placeholder='Nome do Cliente'
                onChange={(e) => setClient(e.target.value)}
            />
            <Input 
                id='clientTable'
                title='Mesa'
                value={table}
                placeholder='00'
                onChange={(e) => setTable(e.target.value)}
            />
            <List 
                resume={props.resume}
                onDelete={props.onUpdate}
            />
            <Button 
                title='Enviar para a cozinha'
                onClick={handleSubmit}
            />
        </aside>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '40vw',
        height: '100%',
        padding: '1em 0',
        marginTop: '60px',
        borderLeft: '5px solid #E17409',
        '@media (max-width: 768px)': {
            width: '65vw',
        }
    }
});

export default ResumeArea;