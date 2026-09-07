import styled from "styled-components";
import { resetLink, resetList } from "../../../styled/mixins";

export const ThemeNavStyled = styled.nav`
  ${resetList}
  ${resetLink}
  min-width: 160px;
  padding-right: 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors["secondary"]};

  h4 {
    margin: 0 0 1rem;
    font-size: 1rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: #999;
  }

  ul {
    ${resetList}
    color: ${({ theme }) => theme.colors["dark"]};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors["dark"]};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  a.active {
    color: ${({ theme }) => theme.colors["primary"]};
  }
`;
