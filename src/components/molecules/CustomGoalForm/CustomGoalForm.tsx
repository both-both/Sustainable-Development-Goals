import FormGroup from "../FormGroup/FormGroup";
import { CustomGoalFormStyled } from "./CustomGoalForm.Styled";

export const CustomGoalForm = () => {
  return (
    <CustomGoalFormStyled>
      <fieldset>
        <FormGroup
          type="text"
          title="Måltekst:"
          name="goaltext"
          placeholder="Indtast titel på mål"
        />
        <FormGroup
          type="text"
          title="Farvekode:"
          name="goalcolor"
          placeholder="Indtast farvekode i heximal værdi"
        />
      </fieldset>
    </CustomGoalFormStyled>
  );
};
