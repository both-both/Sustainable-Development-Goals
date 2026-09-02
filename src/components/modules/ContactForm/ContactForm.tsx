import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../elements/Button/Button";
import { Input } from "../../elements/Input/Input";
import { Label } from "../../elements/Label/Label";
import { Textarea } from "../../elements/Textarea/Textarea";
import { FormGroup } from "../FormGroup/FormGroup";
import { ContactFormStyled } from "./ContactForm.Styled";
import { useForm } from "react-hook-form";
import { type ContactFormValues, contactSchema } from "./ContactForm.types";
import { ErrorText } from "../../elements/ErrorText/ErrorText";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    alert("Tak for din besked, vi kontakter dig hurtigst muligt");
    reset();
  };
  return (
    <ContactFormStyled onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <FormGroup>
          <div>
            <Label htmlFor="name">Navn:</Label>
            <Input
              type="text"
              placeholder="Indtast dit navn"
              {...register("name")}
            />
          </div>
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              placeholder="Indtast din email"
              {...register("email")}
            />
          </div>
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <div>
            <Label htmlFor="message">Besked:</Label>
            <Textarea
              id="message"
              placeholder="Indtast din besked her"
              rows={5}
              {...register("message")}
            />
          </div>
          {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
        </FormGroup>

        <Button type="submit" textValue="Send" />
      </fieldset>
    </ContactFormStyled>
  );
};
