import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavbarList from './navbarList';
import Button from '../buttons/primaryButton';
import Title from '../title';

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
        <header>
        <nav className={css(styles.navbar, styles.big)}>
            <Button 
                name='nav-button'
                class={css(styles.button, styles.bigScreen)}
                onClick={handleClick}
                title={<FontAwesomeIcon icon={faBars} 
                    className={css(styles.icon)}
                />}
            />
            <Title 
                class={css(styles.title)}
                title='Burguer Queen'
            />
            <NavbarList />

        </nav>
        </header>
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
    },
    button: {
        height: 'max-content',
        background: 'none',
        border: 'none',
    },
    bigScreen: {
        '@media (min-width: 1025px)': {
            display: 'none',
        }
    },
    icon: {
        fontSize: '200%',
        color: 'white',
    },
    title: {
        marginLeft: '2vh',
        color: 'white',
    }
});

export default Navbar;