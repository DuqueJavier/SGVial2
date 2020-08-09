import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';


ReactDOM.render(
  < Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,  
  document.getElementById('root')
);

