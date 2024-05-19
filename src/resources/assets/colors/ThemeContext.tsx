// ThemeContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from './index';  // Ensure themes.js is correctly imported
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const colorScheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState(colorScheme === 'dark' ? themes.dark : themes.light); // Default theme

    useEffect(() => {
        const listener = ({ colorScheme }) => {
          setTheme(colorScheme === 'dark' ? themes.dark : themes.light);
        };
    
        Appearance.addChangeListener(listener);
    
        return () => Appearance.removeChangeListener(listener);
      }, []);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
