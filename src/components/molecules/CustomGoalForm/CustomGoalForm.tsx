import { Button } from "../../atoms/Button/Button";
import FormGroup from "../FormGroup/FormGroup";
import { CustomGoalFormStyled } from "./CustomGoalForm.Styled";
import type { CustomGoalFormProps } from "./CustomGoalForm.types";

export const CustomGoalForm = ({
  text,
  color,
  onTextChange,
  onColorChange,
  onSubmit,
}: CustomGoalFormProps) => {
  return (
    <CustomGoalFormStyled onSubmit={onSubmit}>
      <fieldset>
        <FormGroup
          type="text"
          title="Måltekst:"
          name="goaltext"
          placeholder="Indtast titel på mål"
          value={text}
          onChange={onTextChange}
        />
        <FormGroup
          type="text"
          title="Farvekode:"
          name="goalcolor"
          placeholder="Indtast farvekode i heximal værdi"
          value={color}
          onChange={onColorChange}
        />
        <Button type="submit" textValue="Gem"></Button>
      </fieldset>
    </CustomGoalFormStyled>
  );
};
