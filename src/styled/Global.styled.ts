import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.dark};
}
h1{ 
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.dark};
    text-transform: uppercase;
}
h2{ 
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.dark};
}
h3{ 
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.dark};
}

img {
    width: 100%;
}
`;
