import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../../atoms/Button/Button";
import { PreviewCard } from "../../atoms/PreviewCard/PreviewCard";
import {
  ButtonRowStyled,
  CustomGoalDesignerStyled,
  FieldRowStyled,
  FormStyled,
} from "./CustomGoalDesigner.Styled";

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
        <FieldRowStyled>
          <label htmlFor="goaltext">Måltekst</label>
          <input
            id="goaltext"
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder={initialText}
            maxLength={30}
          />
          {textError && <span style={{ color: "red" }}>{textError}</span>}
        </FieldRowStyled>

        <FieldRowStyled>
          <label htmlFor="goalcolor">Farve</label>
          <input
            id="goalcolor"
            type="text"
            value={color}
            onChange={handleColorChange}
            placeholder={initialColor}
            pattern="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            maxLength={7}
          />
          {colorError && <span style={{ color: "red" }}>{colorError}</span>}
        </FieldRowStyled>

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
