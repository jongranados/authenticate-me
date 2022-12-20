import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider as ReactProvider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom'; 
import store from '../src/store'; 

if (process.env.NODE_ENV !== 'production') { 
  window.store = store; 
}

function Root() { 
  return (
    <ReactProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
