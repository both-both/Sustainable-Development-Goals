export const theme = {
  colors: {
    primary: "#2BBBDE",
    secondary: "#EDEDED",
    dark: "#111111",
    light: "#ffffff",

    lightmode: {
      background: "#fff",
      text: "#222",
    },

    darkmode: {
      background: "#1e1e1e",
      text: "#fff",
    },
  },

  fonts: {
    primary: "Open sans, sans-serif",
    secondary: "Oswald, sans-serif",
  },
  fontSizes: {
    xs: "0.8rem",
    s: "1rem",
    m: "1.25rem",
    l: "1.5rem",
    xl: "1.8rem",
  },
  lineHeigth: {
    xs: "1.25rem",
    s: "1.5rem",
    m: "1.8rem",
    l: "2rem",
    xl: "2.5rem",
  },
} as const;
export type Theme = typeof theme;
