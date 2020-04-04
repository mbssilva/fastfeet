import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import './config/reactotronConfig';

import GlobalStyles from './styles/global';
import history from './config/history';

import Routes from './Routes';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
          <ToastContainer autoClose={2500} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
