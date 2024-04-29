import React, { useState } from 'react';
import './LanguageToggle.css';

export default function LanguageToggle() {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };

    return (
        <div className="toggle-container">
            <input
                type="radio"
                id="switchEnglish"
                name="toggleLanguage"
                value="English"
                defaultChecked={true} 
                onChange={handleLanguageChange}
            />
            <label htmlFor="switchEnglish">English</label>
            <input
            type="radio"
            id="switchSwahili"
            name="toggleLanguage"
            value="Swahili"
            onChange={handleLanguageChange}
            />
            <label htmlFor="switchSwahili">Swahili</label>
        </div>
    );
}