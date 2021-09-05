import React from "react";
import { useState, useEffect } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      window.localStorage.setItem("airbnbTheme", "dark");
    } else {
      document.body.classList.remove("dark");
      window.localStorage.setItem("airbnbTheme", "light");
    }
  }, [isDark]);
  return (
    <ThemeContext.Provider value={{ setIsDark, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeConsumer, ThemeProvider, ThemeContext };
