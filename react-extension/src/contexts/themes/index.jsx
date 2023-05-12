import { useState, useContext, createContext } from "react";
const ThemeContext = createContext();
const themes = {

    theme1: {'primColor': '#E2E4F', 'SecColor': '#DAFAB0', 
    'primText': '#191919', 'secText': '#ffffff', 'primBG': '#FFF0CA', 
    'secBG': "#D1D184", 'accentColor': '#FFB4DA', 'theme': 1}
}
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.theme1);
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => useContext(ThemeContext);

