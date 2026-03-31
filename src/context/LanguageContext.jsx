import { createContext, useState } from "react";
import { translations } from "../i18n/Translations";
export const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('ch')
    const handleLangChange = () => {
        setLang((prev) => prev == 'en' ? 'ch':'en')
    }
    const value = {
        handleLangChange,
        text: translations[lang],
        lang: lang
    }
    return(
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}