import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link } from 'react-router-dom';
import logo from '../images/bq.png';

const Denied = () => {
  return (
    <main className={css(styles.div)}>
      <section className={css(styles.section)}>
        <div className={css(styles.message)}>
          <h1 className={css(styles.title)}>Acesso negado</h1>
          <p className={css(styles.text)}>
            Você não tem permissão para<br></br>acessar essa página.
          </p>
          <p className={css(styles.text)}>
            Volte à pagina anterior ou faça {''}
            <Link to='/' className={css(styles.link)}>
              login
            </Link>
            .
          </p>
        </div>
      </section>
      <img
        src={logo}
        className={css(styles.img)}
        alt='Logo Burguer Queen'
      ></img>
    </main>
  );
};

const styles = StyleSheet.create({
  section: {
    background: '#A62F03',
    height: '100vh',
    width: '80vw',
    display: 'flex',
    alignItems: 'center',
    clipPath: 'polygon(0px 0px, 40vw 0px, 300vw 1100vw, 0px 100%)',
    '@media (max-width: 975px)': {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      width: '100vw',
      height: '74vh'
    }
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 975px)': {
      flexDirection: 'column-reverse'
    }
  },
  text: {
    fontSize: '1.1em',
    color: 'white'
  },
  img: {
    marginRight: '7.5%',
    '@media (max-width: 414px)': {
      height: '215px'
    },
    '@media (max-width: 975px)': {
      marginRight: '0'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(225, 116, 9)',
    transition: '0.2s linear',
    ':hover': {
      color: 'white'
    }
  },
  title: {
    color: 'white'
  },
  message: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    height: '20%',
    '@media (max-width: 975px)': {
      width: '100%',
      height: '50%'
    }
  }
});

export default Denied;
