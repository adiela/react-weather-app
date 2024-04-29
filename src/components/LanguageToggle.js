import React, { useState, useContext } from 'react';
import './LanguageToggle.css';
import { LocaleContext } from '../App';

export default function LanguageToggle() {
    const { setLocale } = useContext(LocaleContext);
    // const [language, setLanguage] = useState('');

    const handleLanguageChange = (event) => {
      setLocale(event.target.value);
    };

    return (
        <div className="toggle-container">
            <input
                type="radio"
                id="switchEnglish"
                name="toggleLanguage"
                value="en"
                defaultChecked={true} 
                onChange={handleLanguageChange}
            />
            <label htmlFor="switchEnglish">English</label>
            <input
            type="radio"
            id="switchSwahili"
            name="toggleLanguage"
            value="sw"
            onChange={handleLanguageChange}
            />
            <label htmlFor="switchSwahili">Swahili</label>
        </div>
    );
}