"use client";
import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const getTheme = () => {
  return useContext(ThemeContext);
};
export default function ThemeProvider({ children }) {
  const [theme, settheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, settheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
