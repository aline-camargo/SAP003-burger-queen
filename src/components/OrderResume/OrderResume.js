import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Title from './title';
import Input from './input';
import List from './orderList';
import Button from '../buttons/confirmButton';

const ResumeArea = (props) => {
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
            <List 
                resume={props.resume}
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
    }
});

export default ResumeArea;