import type React from "react";

export type ThemeContextProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};
