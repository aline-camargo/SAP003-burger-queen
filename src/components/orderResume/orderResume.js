import React, { useState } from 'react';
import notification from '../notifications';
import { StyleSheet, css } from 'aphrodite/no-important';
import { db, auth } from '../../util/firebaseConfig';
import PropTypes from 'prop-types';
import Subtitle from '../subtitle';
import Input from '../input';
import List from './orderList';
import Button from '../primaryButton';

const ResumeArea = ({ resume, onUpdate }) => {
  const [client, setClient] = useState({ name: '', table: '' });

  const handleSubmit = () => {
    if (client.name === '' || client.table === '' || resume.length === 0) {
      notification({
        title: 'Pedido inválido',
        message: 'Preencha todos os campos.',
        type: 'danger'
      });
    } else {
      notification({
        title: 'Aguarde',
        message: 'Pedido sendo enviado.',
        type: 'info'
      });

      if (!navigator.onLine) {
        notification({
          title: 'Sem conexão de internet.',
          message: 'Seu pedido será salvo localmente no momento.',
          type: 'warning'
        });
      }

      db.collection('kitchen')
        .add({
          atendent: auth.currentUser.displayName,
          client: {
            name: client.name,
            table: client.table
          },
          order: resume,
          time: new Date().getTime(),
          location: 'kitchen'
        })
        .then(() => {
          notification({
            title: 'Pedido enviado com sucesso!',
            message: 'Obrigada!',
            type: 'success'
          });
          setClient({ name: '', table: '' });
          onUpdate([]);
        })
        .catch((error) => {
          notification({
            title: 'Falha no envio',
            message: error,
            type: 'danger'
          });
        });
    }
  };

  return (
    <aside className={css(styles.container)}>
      <Subtitle style={css(styles.title)}>Resumo do Pedido</Subtitle>
      <Input
        id='clientName'
        value={client.name}
        placeholder='Nome do Cliente'
        type='text'
        style={{
          container: css(styles.InputContainer),
          input: css(styles.input),
          label: css(styles.label)
        }}
        onChange={(e) => {
          setClient((state) => ({ ...state, name: e.target.value }));
          e.persist();
        }}
      >
        Nome:
      </Input>
      <Input
        id='clientTable'
        value={client.table}
        placeholder='00'
        type='text'
        style={{
          container: css(styles.InputContainer),
          input: css(styles.input),
          label: css(styles.label)
        }}
        onChange={(e) => {
          setClient((state) => ({ ...state, table: e.target.value }));
          e.persist();
        }}
      >
        Mesa:
      </Input>
      <List
        resume={resume}
        onDelete={onUpdate}
      />
      <Button
        style={css(styles.button)}
        onClick={handleSubmit}
      >
        Enviar para a cozinha
      </Button>
    </aside>
  );
};

ResumeArea.propTypes = {
  resume: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '40vw',
    height: '100%',
    padding: '1em 0',
    marginTop: '60px',
    '@media (max-width: 768px)': {
      width: '65vw'
    }
  },
  button: {
    background: '#57ad1c',
    color: 'white',
    border: 'none',
    width: '90%',
    padding: '0.5em',
    fontSize: '23px',
    borderRadius: '6px',
    marginTop: '4%',
    ':hover': {
      cursor: 'pointer'
    }
  },
  title: {
    color: '#A62F03'
  },
  InputContainer: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    '@media (max-width: 500px)': {
      flexDirection: 'column'
    }
  },
  label: {
    color: '#A62F03',
    fontSize: '1.4em',
    ':hover': {
      cursor: 'pointer'
    }
  },
  input: {
    border: '1px solid gray',
    borderRadius: '6px',
    padding: '2%',
    fontSize: '1em',
    width: '80%'
  }
});

export default ResumeArea;
