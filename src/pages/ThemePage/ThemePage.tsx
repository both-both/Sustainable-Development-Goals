import { Outlet } from "react-router-dom";
import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import { ThemeNav } from "../../components/modules/ThemeNav/ThemeNav";
import { ThemePageStyled } from "./ThemePage.styled";

export const ThemePage = () => {
  return (
    <ContentWrapper
      title="Temaer"
      description="her kan du se de forskellige temaer af de 17 verdensmål"
      showTitle={true}
    >
      <ThemePageStyled>
        <div>
          <ThemeNav />
        </div>
        <div>
          <Outlet />
        </div>
      </ThemePageStyled>
    </ContentWrapper>
  );
};
