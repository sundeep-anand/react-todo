import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import Spanish from "./languages/es-MX.json";
import English from "./languages/en-US.json";

const locale = navigator.language;

let lang = (locale === "en-US") ? English : Spanish;

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={"es-MX"} messages={Spanish}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
