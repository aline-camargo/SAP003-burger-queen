import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import BurguerButton from './burguerButton';
import Brand from './brandTitle';
import HeaderList from './headerList';

const Navbar = () => {
    // const [open, didCollapse] = useState(false);

    // useEffect(() => {

    // }, false)

    return (
        <nav className={css(styles.navbar)}>
            <BurguerButton 
                // handleClick={() => didCollapse(!open)}
            />
            <Brand />
            <HeaderList 
                // mustOpen={open}
            />
        </nav>
    );
};

const styles = StyleSheet.create({
    navbar: {
        background: '#A62F03',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '1em'
    }
});

export default Navbar;