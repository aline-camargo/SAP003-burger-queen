import React, { useState } from 'react';
import { auth, db } from '../util/firebaseConfig';
import { StyleSheet, css} from 'aphrodite/no-important';
import notification from '../components/notifications';
import Input from '../components/input';
import Button from '../components/buttons/primaryButton';
import logo from '../images/burguer-queen.png';
import Select from '../components/select';

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('false');

    const handleClick = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            db.collection('users').add({
                uid: user.user.uid,
                kitchen: type === 'true' ? true : false,
            })
            notification({
                title: 'Usuário criado com sucesso!',
                message: 'Você será redirecionado.',
                type: 'success',
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

    return (
        <main className={css(styles.div)}>
        <section className={css(styles.section)}>
            <div className={css(styles.bigContainer)}>
                <div className={css(styles.container)}>
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
            </div>
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
            height: '74vh',
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
        marginTop: '50px',
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
   }

})

export default Register;