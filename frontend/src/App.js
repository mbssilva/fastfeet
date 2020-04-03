import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import history from './config/history';

import Routes from './Routes';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
