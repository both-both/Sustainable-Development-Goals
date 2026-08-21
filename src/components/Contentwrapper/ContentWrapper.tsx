import { ContentWrapperStyled } from "./ContentWrapper.Styles";
import type { ContentWrapperProps } from "./ContentWrapper.types";
import { Div } from "../atoms/Div/Div";

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
      <Div className="gray-bar">{showTitle && <h1>{title}</h1>}</Div>

      <Div className="main-container">{children}</Div>
    </ContentWrapperStyled>
  );
};
