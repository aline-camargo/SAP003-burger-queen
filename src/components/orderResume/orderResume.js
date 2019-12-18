import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db } from '../../util/firebaseConfig';
import Title from '../title';
import Input from '../input';
import List from './orderList';
import Button from '../buttons/primaryButton';

const ResumeArea = (props) => {
    const [ client, setClient ] = useState('');
    const [ table, setTable ] = useState('');
    
    const handleSubmit = () => {
        const notification = (obj) => {
            store.addNotification({
                title: obj.title,
                message: obj.message,
                type: obj.type,
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "fadeInDown"],
                animationOut: ["animated", "fadeOutUp"],
                dismiss: {
                  duration: 1500,
                }
              });
        }
        
        if (client === '' || table === '' || props.resume.length === 0) {
            notification({
                title: "Pedido inválido",
                message: "Preencha todos os campos.",
                type: "danger",
            })
        } else {
            notification({
                title: "Aguarde",
                message: "Pedido sendo enviado.",
                type: "info",
            })

            db.collection('new-order').add({
                client: client,
                table: table,
                order: props.resume,
                time: new Date().getTime(),
                passed: 0,
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
    }
    
    return (
        <aside className={css(styles.container)}>
            <Title 
                class={css(styles.title)}
                title='Resumo do Pedido'
            />
            <Input 
                id='clientName'
                title='Nome'
                value={client}
                placeholder='Nome do Cliente'
                class={{
                    container: css(styles.InputContainer),
                    input: css(styles.input),
                    label: css(styles.label)
                }}
                onChange={(e) => setClient(e.target.value)}
            />
            <Input 
                id='clientTable'
                title='Mesa'
                value={table}
                placeholder='00'
                class={{
                    container: css(styles.InputContainer),
                    input: css(styles.input),
                    label: css(styles.label)
                }}
                onChange={(e) => setTable(e.target.value)}
            />
            <List 
                resume={props.resume}
                onDelete={props.onUpdate}
            />
            <Button 
                name='enviar-cozinha'
                class={css(styles.button)}
                onClick={handleSubmit}
                title='Enviar para a cozinha'
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
        '@media (max-width: 768px)': {
            width: '65vw',
        }
    },
    button: {
        background: '#57ad1c',
        color: 'white',
        border: 'none',
        width: '90%',
        height: '10%',
        padding: '1%',
        fontSize: '23px',
        borderRadius: '6px',
        marginTop: '4%',
        ':hover':{
            cursor: 'pointer',
        }
    },
    title: {
        color: '#A62F03',
    },
    InputContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
    },
    label: {
        color: '#A62F03',
        ':hover':{
            cursor: 'pointer',
        }
    },
    input: {
        border: '1px solid gray',
        borderRadius: '6px',
        padding: '2%',
        width: '80%',
    }
});

export default ResumeArea;