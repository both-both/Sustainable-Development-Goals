import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "../../atoms/Button/Button";
import { PreviewCard } from "../../atoms/PreviewCard/PreviewCard";
import {
  ButtonRowStyled,
  CustomGoalDesignerStyled,
  FieldRowStyled,
  FormStyled,
} from "./CustomGoalDesigner.Styled";

const initialText = "";
const initialColor = "#2BBBDE";

export const CustomGoalDesigner = () => {
  const [text, setText] = useState<string>(initialText);
  const [color, setColor] = useState<string>(initialColor);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!text) {
      setError("Teksten må ikke være tom");
    } else {
      setError("");
    }
  }, [text]);

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
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
        </FieldRowStyled>

        <FieldRowStyled>
          <label htmlFor="goalcolor">Farve</label>
          <input
            id="goalcolor"
            type="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
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
