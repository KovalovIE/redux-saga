import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Button } from './Button';
import { reducer } from './reducers';
import { watchLoadData } from './sagas';

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(watchLoadData);

    return (
      <Provider store={store}>
        <Button />
      </Provider>
    )
};

export default App;
