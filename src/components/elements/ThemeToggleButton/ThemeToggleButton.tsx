import { useContext } from "react";
import type { ThemeContextProps } from "../../../contexts/ThemeContext.types";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { ButtonStyled } from "../Button/Button.Styled";
import { Button } from "../Button/Button";
export const ThemeToggleButton = () => {
  const { darkMode, toggleTheme } = useContext<ThemeContextProps>(ThemeContext);

  return (
    <ButtonStyled>
      <Button
        onClick={toggleTheme}
        textValue={darkMode ? "Light mode" : "Dark mode"}
      ></Button>
    </ButtonStyled>
  );
};
