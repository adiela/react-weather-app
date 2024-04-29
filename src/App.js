import React, { createContext, useState } from 'react';

import { IntlProvider, FormattedMessage } from 'react-intl';
import messages_en from './translations/en.json';
import messages_sw from './translations/sw.json';
import './App.css';
import LanguageToggle from "./components/LanguageToggle";
import WeatherStatus from './components/WeatherStatus';

export const LocaleContext = createContext(null);


const messages = {
  en: messages_en,
  sw: messages_sw,
};

function App() {
  const [locale, setLocale] = useState('en'); //Default locale is English

  return (
    <LocaleContext.Provider value={{
      locale,
      setLocale
    }}>
       <IntlProvider messages={messages[locale]}  locale={locale} defaultLocale='en'>
      <div id="App">
        <header id='weather-header'>
          <h1 id='app-name'>
            <FormattedMessage id="app.title"/>
          </h1>
          <LanguageToggle/>
        </header>
        <WeatherStatus/>
      </div>
    </IntlProvider>
    </LocaleContext.Provider>
   
  );
}

export default App;
