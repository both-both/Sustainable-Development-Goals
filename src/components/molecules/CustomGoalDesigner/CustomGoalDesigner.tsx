import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../../atoms/Button/Button";
import { PreviewCard } from "../../atoms/PreviewCard/PreviewCard";
import {
  ButtonRowStyled,
  CustomGoalDesignerStyled,
  FormStyled,
} from "./CustomGoalDesigner.Styled";
import { FormGroupStyled } from "../FormGroup/FormGroup.Styled";

const initialText = "";
const initialColor = "#2BBBDE";

export const CustomGoalDesigner = () => {
  const [text, setText] = useState<string>(initialText);
  const [color, setColor] = useState<string>(initialColor);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleReset = () => {
    setText(initialText);
    setColor(initialColor);
  };

  return (
    <CustomGoalDesignerStyled>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="goaltext">Måltekst</label>
        <input
          id="goaltext"
          type="text"
          value={text}
          onChange={handleTextChange}
        />

        <label htmlFor="goalcolor">Farve</label>
        <input
          id="goalcolor"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <ButtonRowStyled>
          <Button type="submit" textValue="Gem"></Button>
          <Button
            type="button"
            onClick={handleReset}
            textValue="Reset"
          ></Button>
        </ButtonRowStyled>
      </FormStyled>

      <PreviewCard description={text} color={color} />
    </CustomGoalDesignerStyled>
  );
};
