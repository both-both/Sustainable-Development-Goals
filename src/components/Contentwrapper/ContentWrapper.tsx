import { ContentWrapperStyled } from "./ContentWrapper.Styles";
import type { ContentWrapperProps } from "../../types/types";

export const ContentWrapper = ({
  title,
  description,
  showTitle,
  children,
}: ContentWrapperProps) => {
  document.title = title;

  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }

  return (
    <ContentWrapperStyled>
      {showTitle && <h1>{title}</h1>}

      <p>{children}</p>
    </ContentWrapperStyled>
  );
};
