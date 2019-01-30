import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import * as serviceWorker from './serviceWorker';
// import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx';
import  todoApp from './reducers/reducers.js'

let store = createStore(todoApp)
// let rootElement = document.getElementById('app')

// render(
   
//        <App />
    
     
//     rootElement
//  )

ReactDOM.render(
    <Provider store = {store}>
<App />
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
