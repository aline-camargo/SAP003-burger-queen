import React, { useState } from 'react';
import { auth } from '../util/firebaseConfig';
import { StyleSheet, css} from 'aphrodite/no-important';
import Input from '../components/input';
import Button from '../components/buttons/primaryButton';

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleClick = () => {
    //     auth.createUserWithEmailAndPassword(email, password)
    //     .then()
    //     .catch((error)=> {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //       });
    // }

    return (
        <section className={css(styles.section)}>
            <div>
                <Input 
                    class={{
                            container: css(styles.container),
                            input: css(styles.input)
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
                            input: css(styles.input)
                    }}
                    id='senha'
                    type='password'
                    value={password}
                    title='Senha'
                    placeholder='senhaexemplo123'
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <Button 
                    class=''
                    title='Cadastrar'
                    name='register'
                    onClick={()=>console.log('clicou')}
                />
            </div>
        </section>
    );
};

const styles = StyleSheet.create({
    section: {
        background: '#A62F03',
        width: '50vw',
        height: '100vh',
        display: 'flex',
        verticalAlign: 'middle',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        // align-items: center;
        // padding: 1em;
        // font-size: 1.5em;
    },
    input: {
        border: '1px solid gray',
        borderRadius: '6px',
        padding: '2%',
        width: '80%',
        // border: 1px solid gray;
        // border-radius: 6px;
        // padding: 2%;
        // width: 300px;
        // font-size: 0.7em;
        // width: 300px;
        // font-size: 0.7em;
    },
    button: {
        width: '100%',
        // background: green,
        border: 'none',
        padding: '0.7em',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '6px',
   }, 
   div: {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // height: 30%;
    // justify-content: space-between;
   }, 
   label: {
    // margin-bottom: 0.3em;
   }, 

})

export default Register;