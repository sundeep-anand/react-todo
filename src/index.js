import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LangWrapper from './components/LangWrapper';

ReactDOM.render(
  <React.StrictMode>
    <LangWrapper>
      <App />
    </LangWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
