import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers'


const store=createStore(rootReducer)
// console.log('store',store);
// console.log('BEFORE-DISPATCH_STATE',store.getState())

// store.dispatch({
//   type:'ADD_MOVIE',
//   movies:[{name:'kamlesh'}]
// });

// console.log('AFTER-DISPATCH_STATE',store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

