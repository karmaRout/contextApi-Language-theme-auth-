import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const handleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }
    const value = {
        theme: theme,
        handleTheme
    }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}