import { Outlet } from "react-router-dom";
import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import { ThemeNav } from "../../components/modules/ThemeNav/ThemeNav";

export const ThemePage = () => {
  return (
    <ContentWrapper
      title="Temaer"
      description="her kan du se de forskellige temaer af de 17 verdensmål"
      showTitle={true}
    >
      <ThemeNav />
      <Outlet />
    </ContentWrapper>
  );
};
