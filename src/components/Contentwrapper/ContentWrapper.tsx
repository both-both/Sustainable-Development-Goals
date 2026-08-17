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
    <div>
      {showTitle && <h1>{title}</h1>}

      <p>{children}</p>
    </div>
  );
};
