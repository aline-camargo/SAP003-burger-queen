import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import BurguerButton from './burguerButton';
import Brand from './brandTitle';
import HeaderList from './headerList';

const Navbar = () => {
    const handleClick = (e) => {
        const listDisplay = e.currentTarget.nextElementSibling.nextElementSibling.style;
        if (!listDisplay.display || listDisplay.display === 'none') {
            listDisplay.display = 'block';
            // maxHeight: '200px';
            // transition: 'max-height 1s ease-in-out';
        } else {
            listDisplay.display = 'none';
        }
    }

    return (
        <nav className={css(styles.navbar, styles.big)}>
            <BurguerButton 
                onClick={handleClick}
            />
            <Brand />
            <HeaderList />
        </nav>
    );
};

const styles = StyleSheet.create({
    navbar: {
        background: '#A62F03',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '1em',
        position: 'fixed',
        width: '100%',
    },
    big: {
        '@media (min-width: 1025px)': {
            justifyContent: 'space-between',
        }
    }
});

export default Navbar;