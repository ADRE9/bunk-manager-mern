import React, { createContext } from 'react';
import useDarkMode from '../hooks/useDarkMode';

export const ThemeContext = createContext('light');

export default ({ children }) => {
  const [newTheme, toggleTheme] = useDarkMode();

  return (
    <ThemeContext.Provider
      value={{
        newTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
