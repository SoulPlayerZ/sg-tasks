import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState('');

const contextValue = {
    theme,
    setTheme,
};

return (
<ThemeContext.Provider value={contextValue}>
    {children}
</ThemeContext.Provider>
);
}

export default ThemeProvider;