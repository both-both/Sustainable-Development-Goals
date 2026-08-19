import type { GoalSectionProps } from "../../types/types";
import { Div } from "../Div/Div";
import divider from "../../assets/images/Divider.svg";
import { GoalSectionStyled } from "../GoalSection/GoalSectionStyled";

export const GoalSection = ({ children }: GoalSectionProps) => {
  return (
    <GoalSectionStyled>
      <Div as="section" className="gray-bar">
        <Div className="main-container">
          <h1>FN's 17 verdensmål for bæredygtig udvikling</h1>
          <img className="divider" src={divider} alt="divider-ikon" />
          {children}
        </Div>
      </Div>
    </GoalSectionStyled>
  );
};
