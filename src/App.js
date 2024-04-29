import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import messages_en from './translations/en.json';
import messages_sw from './translations/sw.json';
import './App.css';
import LanguageToggle from "./components/LanguageToggle"

const messages = {
  en: messages_en,
  sw: messages_sw,
};

function App() {
  const [locale, setLocale] = useState('en'); //Default locale is English

  const changeLanguage = (selectedLocale) => {
    setLocale(selectedLocale)
  };
  return (
    <IntlProvider messages={messages[locale]}  locale={locale}>
      <div id="App">
        <LanguageToggle/>
        <h1 id='app-name'>
          <FormattedMessage id="app.title"/>
        </h1>
      </div>
    </IntlProvider>
  );
}

export default App;
