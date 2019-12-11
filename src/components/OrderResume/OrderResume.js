import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Title from './title';
import Input from './input';
import List from './orderList';
import Total from './totalArea';
import Button from '../buttons/confirmButton';

const ResumeArea = () => {
    return (
        <aside className={css(styles.container)}>
            <Title />
            <Input 
                id='clientName'
                title='Nome'
                type='text'
                placeholder='Fulano de Tal'
            />
            <Input 
                id='clientTable'
                title='Mesa'
                type='number'
                placeholder='00'
            />
            <List />
            <Total />
            <Button 
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
        width: '40vw',
        padding: '1em',
        borderLeft: '5px solid #E17409',
        justifyContent: 'space-between',
    }
});

export default ResumeArea;