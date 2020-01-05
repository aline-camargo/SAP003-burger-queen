import React, { useState } from 'react';
import { auth, db } from '../util/firebaseConfig';
import { useHistory } from "react-router-dom";
import { StyleSheet, css} from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import notification from '../components/notifications';
import Input from '../components/input';
import Button from '../components/buttons/primaryButton';
import logo from '../images/bq.png';
import Select from '../components/select/select';

const Register = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('title');

    const handleClick = () => {
        if (type === 'title' || name === '') {
            notification({
                title: 'Preencha todos os campos.',
                message: 'Não se esqueça do Nome e Área.',
                type: 'danger',
            })
        } else {
        auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            cred.user.updateProfile({
                displayName: name,
            });
            db.collection('users').doc(cred.user.uid).set({
                kitchen: type === 'true' ? true : false,
                name,
            })
        })
        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
            notification({
                title: errorCode,
                message: errorMessage,
                type: 'danger',
            })
          });
        }
    }
    
    const goBack = () => {
        history.push('/');
    }

    return (
        <main className={css(styles.div)}>
        <section className={css(styles.section)}>
            <form className={css(styles.bigContainer)}>
            <div className={css(styles.iconContainer)}>
                <FontAwesomeIcon icon={faArrowLeft} className={css(styles.icon)} onClick={goBack}/>
            </div>
                <div className={css(styles.container)}>
                        <Input 
                            class={{
                                    container: css(styles.container),
                                    input: css(styles.input),
                                    label: css(styles.label)
                            }}
                            id='nome'
                            type='text'
                            value={name}
                            title='Nome'
                            placeholder='Nome aqui'
                            onChange={(e)=> setName(e.target.value)}
                        />
                        <Input 
                            class={{
                                    container: css(styles.container),
                                    input: css(styles.input),
                                    label: css(styles.label)
                            }}
                            id='email'
                            type='text'
                            value={email}
                            title='Email'
                            placeholder='exemplo@mail.com'
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                        <Input 
                            class={{
                                    container: css(styles.container),
                                    input: css(styles.input),
                                    label: css(styles.label)
                            }}
                            id='senha'
                            type='password'
                            value={password}
                            title='Senha'
                            placeholder='senhaexemplo123'
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                        < Select 
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <Button 
                        class={css(styles.button)}
                        title='Cadastrar'
                        name='register'
                        onClick={handleClick}
                    />
            </form>
        </section>
        <img src={logo} className={css(styles.img)} alt='Logo Burguer Queen'></img>
        </main>
    );
};

const styles = StyleSheet.create({
    section: {
        background: '#A62F03',
        height: '100vh',
        width: '80vw',
        clipPath: 'polygon(0px 0px, 40vw 0px, 300vw 1100vw, 0px 100%)',
        '@media (max-width: 975px)': {
            clipPath:'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            width: '100vw',
            height: '80vh',
        },
    },
    bigContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '65%',
        height: '100%',
        '@media (max-width: 975px)' : {
            width: '100%',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    input: {
        border: 'none',
        borderRadius: '4px',
        padding: '0.7em',
        width: '300px',
        fontSize: '1em',
    },
    button: {
        width: '300px',
        background: '#e17409',
        border: 'none',
        padding: '0.7em',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '4px',
        fontSize: '1em',
        marginTop: '2.5em',
        cursor: 'pointer',
   }, 
   div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 975px)': {
        flexDirection: 'column-reverse',
    }
   }, 
   label: {
    margin: '0.3em 0',
    fontSize: '1.4em',
    color: 'white',
    cursor: 'pointer',
   },
   img: {
       height: '330px',
       marginRight: '7.5%',
       '@media (max-width: 414px)' : {
        height: '215px',
       },
       '@media (max-width: 975px)': {
        marginRight: '0'
       },
   },
   iconContainer: {
        width: '300px',
        fontSize: '2em',
        color: 'white',
        paddingBottom: '1em',
   },
   icon: {
    cursor: 'pointer',
   }

})

export default Register;