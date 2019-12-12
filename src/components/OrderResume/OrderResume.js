import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Title from './title';
import Input from './input';
import List from './orderList';
import Button from '../buttons/confirmButton';

const ResumeArea = () => {
    const [ input, setInput ] = useState('');
    const [ inputN, setInputN ] = useState(0);
    
    const handleSubmit = () => {
        console.log(input, inputN)
    }
    
    return (
        <aside className={css(styles.container)}>
            <Title />
            <Input 
                id='clientName'
                title='Nome'
                type='text'
                placeholder='Fulano de Tal'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Input 
                id='clientTable'
                title='Mesa'
                type='number'
                placeholder='00'
                value={inputN}
                onChange={(e) => setInputN(e.target.value)}
            />
            <List />
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
        width: '40vw',
        padding: '1em 0',
        borderLeft: '5px solid #E17409',
        justifyContent: 'space-between',
    }
});

export default ResumeArea;