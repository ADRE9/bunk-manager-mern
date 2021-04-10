import React, { createContext, useState } from "react";

export const DarkThemeContext = createContext(false);

export default ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};
