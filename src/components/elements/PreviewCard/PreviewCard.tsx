import { PreviewCardStyled } from "./PreviewCard.Styled";
import type { PreviewCardProps } from "./PreviewCard.types";

export const PreviewCard = ({ description, color }: PreviewCardProps) => {
  return (
    <PreviewCardStyled color={color}>
      <div>{description}</div>
    </PreviewCardStyled>
  );
};
