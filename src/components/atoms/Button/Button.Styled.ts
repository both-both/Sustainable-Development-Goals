import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 0.3rem;
  padding: 4px 20px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.primary};

  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
  transition:
    transform 0.1s ease,
    filter 0.15s ease;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.96);
    filter: brightness(0.9);
  }
`;
