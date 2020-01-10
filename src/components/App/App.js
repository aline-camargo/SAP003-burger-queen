import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Routes from '../../routes';

const App = () => {
  return (
    <>
      <ReactNotification />
      <Routes />
    </>
  );
};

export default App;
