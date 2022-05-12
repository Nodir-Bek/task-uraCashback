import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'flag-icon-css/css/flag-icon.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import './index.css';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
