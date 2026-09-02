import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border-radius: 0.3rem;
  padding: 4px 20px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.primary};

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  transition:
    transform 0.1s ease,
    filter 0.15s ease;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    transform: scale(0.96);
    filter: brightness(0.9);
  }
`;
