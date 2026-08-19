import { createGlobalStyle } from "styled-components";
import { reset } from "./mixins";

export const GlobalStyle = createGlobalStyle`
* {
  ${reset}
}
body {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 1.5rem;
}
h1{ 
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.dark};
    text-transform: uppercase;
}
h2{ 
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 600;
     margin-bottom: 1.5rem;
    line-height: ${(props) => props.theme.lineHeigth.xl};
    font-size: ${({ theme }) => theme.fontSizes.l};
    color: ${({ theme }) => theme.colors.dark};
}
h3{ 
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 600;
    margin-bottom: 1.5rem;
    line-height: ${(props) => props.theme.lineHeigth.l};
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.dark};
}

img {
    width: 100%;
}
`;
