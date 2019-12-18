import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavbarList from './navbarList';
import Button from '../buttons/primaryButton';
import Title from '../title';

const Navbar = () => {
    const size = useWindowSize()
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }
    console.log(size.width > 1025 || show);


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

                {

                (size.width > 1025 || show)
                ? <NavbarList />
                : null
                }
                
            </nav>
        </header>
    );
};


function useWindowSize() {

    const isClient = typeof window === 'object';
  
  
  
    function getSize() {
  
      return {
  
        width: isClient ? window.innerWidth : undefined,
  
        height: isClient ? window.innerHeight : undefined
  
      };
  
    }
  
  
  
    const [windowSize, setWindowSize] = useState(getSize);
  
  
  
    useEffect(() => {
  
      if (!isClient) {
  
        return false;
  
      }
  
      
  
      function handleResize() {
  
        setWindowSize(getSize());
  
      }
  
  
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
  
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
  
  
    return windowSize;
  
  }

const styles = StyleSheet.create({
    navbar: {
        background: '#A62F03',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '1em',
        position: 'fixed',
        top: '0',
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
        ':hover': {
            cursor: 'pointer',
        }
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