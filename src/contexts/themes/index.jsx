import { useState, useContext, createContext } from "react";
const ThemeContext = createContext();
const themes = {

    Sage: {'primColor': '#CEE7C5', 'secColor': '#622F19', 'primText': '#622F19', 'secText': '#CEE7C5' , 'name': 'Sage'},
    Rose: {'primColor': '#E9A5AF', 'secColor': '#FFFFFF', 'primText': '#FFFFFF', 'secText': '#E9A5AF' ,'name': 'Rose'},
    Twilight: {'primColor': '#1A3354', 'secColor': '#DAFAB0', 'primText': '#DAFAB0', 'secText': '#1A3354' ,'name': 'Twilight'},
    Melon: {'primColor': '#F4C095', 'secColor': '#36588C', 'primText': '#36588C', 'secText': '#F4C095' ,'name': 'Melon'},
    Lavender: {'primColor': '#E2E4F6', 'secColor': '#989DC8', 'primText': '#989DC8', 'secText': '#E2E4F6' ,'name': 'Lavender'},

}
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.Lavender);
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => useContext(ThemeContext);

