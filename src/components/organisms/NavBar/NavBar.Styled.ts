import styled from "styled-components";
import { resetList } from "../../../styled/mixins";

export const NavBarStyled = styled.nav`
  ul {
    ${resetList}
    font-family: Oswald;
    text-transform: uppercase;
    display: flex;
    gap: 2rem;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors["dark"]};
    }
    a:hover,
    a.active {
      color: ${({ theme }) => theme.colors["primary"]};
    }
  }
`;
