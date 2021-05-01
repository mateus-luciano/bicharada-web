import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import Routes from './routes';
import GlobalStyles from './styles/global';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <Routes />
    </PersistGate>
  </Provider>
);
