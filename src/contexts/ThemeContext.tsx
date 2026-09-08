import { createContext, useEffect, useState } from "react";
import type { ProviderProps, ThemeContextProps } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ProviderProps) => {
  // false = light mode, true = dark mode
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Kører hver gang darkMode ændrer sig
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Skifter mellem light og dark mode
  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
