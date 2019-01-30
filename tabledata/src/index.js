import React from 'react';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './reducers'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
 
 );

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
