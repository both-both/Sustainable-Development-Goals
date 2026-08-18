import styled from "styled-components";

export const NavBarStyled = styled.nav`
  ul {
    list-style: none;
    font-family: Oswald;
    text-transform: uppercase;
    display: flex;
    gap: 2rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors["dark"]};
    }
    a:hover {
      color: ${({ theme }) => theme.colors["primary"]};
    }
  }
`;
