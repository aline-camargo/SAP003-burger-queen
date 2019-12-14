import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Tabs from '../Tabs/tabs';
import TabContent from '../Tabs/tabContent';

const MenuArea = (props) => {
    const [showItems, setShowItems] = useState(true);


    const handleClick = (e) => {   
        if (e.target.id === '#cafe') {    
            setShowItems(true)
        } else {
            setShowItems(false)
        }
    }

    return (
        <main className={css(styles.main)}>
        <div className={css(styles.ul)}>
            <Tabs 
                id='#cafe'
                title= 'Café da manhã'
                onClick={handleClick}
                active={true}
            />
            <Tabs 
                id='#almoco'
                title= 'Almoço e Jantar'
                onClick={handleClick}
                active={false}
            />
        </div>
        <TabContent 
            show={showItems}
            onClick={props.onClick}
            functionOk={props.functionOk}
            functionCancel={props.functionCancel}
        />
        </main>
    );
};

const styles = StyleSheet.create({
    main: {
        width: '60vw',
        marginTop: '60px',
        height: '100%',
        padding: '1em',
    },
    ul: {
        borderBottom: '2px solid #e17409',
        height: 'max-content'
    }
})

export default MenuArea;