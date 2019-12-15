import React from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import NewOrder from '../../pages/newOrder';

function App() {
  return (
    <>
      <ReactNotification />
      <NewOrder />
    </>
  );
}

export default App;
