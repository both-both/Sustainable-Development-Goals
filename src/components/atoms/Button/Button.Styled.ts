import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 0.3rem;
  padding: 4px 20px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.primary};
`;
