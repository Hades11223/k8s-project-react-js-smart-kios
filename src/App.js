import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
// import './owl.carousel.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
import createEncryptor from 'redux-persist-transform-encrypt';
import { persistStore, persistReducer } from 'redux-persist';
import 'mainam-react-native-date-utils'
import Main from './Main';

import reducers from '@redux-store/reducers'

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

const encryptor = createEncryptor({
  secretKey: 'isofh-timesheet-encrypt-key',
  onError: function (error) {
    // Handle the error.
  }
})

const persistConfig = {
  key: 'root-isofh-timesheet',
  storage,
  transforms: [encryptor]
};


const store = createStore(persistReducer(persistConfig, reducers),
  {},
  compose(
    applyMiddleware(thunk)
  ))
const persistor = persistStore(store)

const Kernel = () => (
  <div>
    <ToastContainer autoClose={3000} />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Main />
      </PersistGate>
    </Provider>
  </div >
)
export default Kernel;