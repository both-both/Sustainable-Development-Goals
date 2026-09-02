import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../../elements/Button/Button";
import { PreviewCard } from "../../elements/PreviewCard/PreviewCard";
import {
  ButtonRowStyled,
  CustomGoalDesignerStyled,
  FormStyled,
  WideFormGroup,
} from "./CustomGoalDesigner.Styled";

import { Label } from "../../elements/Label/Label";
import { Input } from "../../elements/Input/Input";
import { ErrorText } from "../../elements/ErrorText/ErrorText";

const initialText = "Hvad er dit verdensmål?";
const initialColor = "#2BBBDE";
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const CustomGoalDesigner = () => {
  const [text, setText] = useState<string>("");
  const [textError, setTextError] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [colorError, setColorError] = useState<string>("");

  useEffect(() => {
    if (!text) {
      setTextError("Teksten må ikke være tom");
    } else {
      setTextError("");
    }
  }, [text]);

  useEffect(() => {
    if (!hexColorRegex.test(color)) {
      setColorError("Ugyldig hex-farve, brug fx #2BBBDE");
    } else {
      setColorError("");
    }
  }, [color]);

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
        <WideFormGroup>
          <div>
            <Label htmlFor="goaltext">Måltekst</Label>
            <Input
              id="goaltext"
              type="text"
              name="goaltext"
              value={text}
              onChange={handleTextChange}
              placeholder={initialText}
              maxLength={30}
            />
          </div>
          {textError && <ErrorText>{textError}</ErrorText>}
        </WideFormGroup>

        <WideFormGroup>
          <div>
            <Label htmlFor="goalcolor">Farve</Label>
            <Input
              id="goalcolor"
              type="text"
              name="goalcolor"
              value={color}
              onChange={handleColorChange}
              placeholder={initialColor}
              pattern="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              maxLength={7}
            />
          </div>
          {colorError && <ErrorText>{colorError}</ErrorText>}
        </WideFormGroup>

        <ButtonRowStyled>
          <Button type="submit" textValue="Gem"></Button>
          <Button
            type="button"
            onClick={handleReset}
            textValue="Reset"
          ></Button>
        </ButtonRowStyled>
      </FormStyled>
      <PreviewCard
        description={text || initialText}
        color={color || initialColor}
      />
    </CustomGoalDesignerStyled>
  );
};
