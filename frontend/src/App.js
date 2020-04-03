import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import history from './config/history';

import Routes from './Routes';

import Layout from './pages/layout';

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
