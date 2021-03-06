import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './mobile.scss';
import App from './components/App/App';

import ContextProvider from './context';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);