import type { GoalSectionProps } from "../../../types/types";
import { Div } from "../../elements/Div/Div";
import divider from "../../../assets/images/Divider.svg";
import { GoalSectionStyled } from "./GoalSection.Styled";

export const GoalSection = ({ children }: GoalSectionProps) => {
  return (
    <GoalSectionStyled>
      <Div as="section" className="gray-bar">
        <Div className="main-container">
          <h2>FN's 17 verdensmål for bæredygtig udvikling</h2>
          <img className="divider" src={divider} alt="divider-ikon" />
          {children}
        </Div>
      </Div>
    </GoalSectionStyled>
  );
};
