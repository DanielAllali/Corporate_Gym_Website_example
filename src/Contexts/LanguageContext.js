import React, { createContext, useState } from "react";

if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "he");
}
export const LanguageContext = createContext({
    language: localStorage.getItem("language"),
    setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageVar] = useState(
        localStorage.getItem("language")
    );

    const setLanguage = (lang) => {
        setLanguageVar(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
