import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import GlobalStyles from './styles/global';
import history from './config/history';

import Routes from './Routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
        <ToastContainer autoClose={2500} />
      </Router>
    </Provider>
  );
}

export default App;
