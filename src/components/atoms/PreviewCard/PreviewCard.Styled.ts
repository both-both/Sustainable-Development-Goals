import styled from "styled-components";

export const PreviewCardStyled = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  color: #${({ theme }) => theme.colors.light};

  min-width: 250px;
  height: 250px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.75rem;
  text-align: center;
`;
