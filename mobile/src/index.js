import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/reactotronConfig';

import { store, persistor } from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <StatusBar barStyle="light-content" backgroundColor="#7159c1" /> */}
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
