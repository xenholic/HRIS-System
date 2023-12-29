/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// Import our custom CSS

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import './assets/css/styles.scss'
import './assets/js/main.js'
// Import the store provider
// Import the 'store' variable from the appropriate file
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
