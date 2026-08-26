import styled from "styled-components";
import { resetButton } from "../../../styled/mixins";

export const LikeButtonWrapperStyled = styled.button`
  ${resetButton}
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding-top: 2rem;
`;

export const LikeButtonStyled = styled.path<{ $liked: boolean }>`
  fill: ${({ theme, $liked }) =>
    $liked ? theme.colors.primary : theme.colors.dark};
`;
