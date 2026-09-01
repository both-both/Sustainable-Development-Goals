import styled from "styled-components";

export const PreviewCardStyled = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.light};

  width: 250px;
  height: 250px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.75rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: normal;
  text-transform: uppercase;
`;
