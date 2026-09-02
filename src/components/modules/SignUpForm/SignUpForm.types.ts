import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Indtast en gyldig email"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;
