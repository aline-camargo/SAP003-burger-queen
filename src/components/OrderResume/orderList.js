import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const List = () => {
    return (
        <div id="orderList" className={css(styles.list)}></div>
    );
};

const styles = StyleSheet.create({
    list: {
        overflow: 'auto',
        height: '55%',
        width: '100%',
        border: '1px solid'
    }
})

export default List;