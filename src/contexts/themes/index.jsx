import { useState, useContext, createContext } from "react";
const ThemeContext = createContext();
const themes = {

    theme1: {'primColor': '#CEE7C5', 'secColor': '#622F19', 'primText': '#622F19', 'secText': '#CEE7C5' , 'theme': 1},
    theme2: {'primColor': '#E9A5AF', 'secColor': '#FFFFFF', 'primText': '#FFFFFF', 'secText': '#E9A5AF' ,'theme': 2},
    theme3: {'primColor': '#1A3354', 'secColor': '#DAFAB0', 'primText': '#DAFAB0', 'secText': '#1A3354' ,'theme': 3},
    theme4: {'primColor': '#F4C095', 'secColor': '#36588C', 'primText': '#36588C', 'secText': '#F4C095' ,'theme': 'Melon'},
    theme5: {'primColor': '#E2E4F6', 'secColor': '#989DC8', 'primText': '#989DC8', 'secText': '#E2E4F6' ,'theme': 5},



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

