import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import Tabs from './primaryButton';
import TabContent from './tabContent';

const MenuArea = (props) => {
  const [showItems, setShowItems] = useState(true);
  const [breakfest, setBreakfest] = useState(
    css(styles.clicked, styles.button)
  );
  const [lunch, setLunch] = useState(css(styles.initial, styles.button));

  const handleClick = (type) => {
    if (type === 'cafe') {
      setBreakfest(css(styles.clicked, styles.button));
      setLunch(css(styles.initial, styles.button));
      setShowItems(true);
    } else {
      setLunch(css(styles.clicked, styles.button));
      setBreakfest(css(styles.initial, styles.button));
      setShowItems(false);
    }
  };

  return (
    <main className={css(styles.main)}>
      <div className={css(styles.ul)}>
        <Tabs
          name='cafe'
          title='Café da manhã'
          class={breakfest}
          onClick={() => handleClick('cafe')}
        />
        <Tabs
          name='almoco'
          title='Almoço e Jantar'
          class={lunch}
          onClick={() => handleClick('almoco')}
        />
      </div>
      <TabContent
        show={showItems}
        onClickItem={props.onClickItem}
        onClickBurguer={props.onClickBurguer}
        onChange={props.onChange}
        burguer={props.burguer}
      />
    </main>
  );
};

MenuArea.propTypes = {
  onClickItem: PropTypes.func,
  onClickBurguer: PropTypes.func,
  onChange: PropTypes.func,
  burguer: PropTypes.object,
};

const styles = StyleSheet.create({
  main: {
    width: '60vw',
    marginTop: '60px',
    height: '100%',
    padding: '1em'
  },
  ul: {
    borderBottom: '2px solid #e17409',
    height: 'max-content'
  },
  button: {
    display: 'inline',
    border: '2px solid #e17409',
    borderBottom: 'none',
    padding: '1em',
    ':hover': {
      cursor: 'pointer'
    }
  },
  clicked: {
    background: '#e17409',
    color: 'white'
  },
  initial: {
    background: '#f7f5f5',
    color: '#e17409'
  }
});

export default MenuArea;
