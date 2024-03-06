import { z } from "zod";

export const loginShema = z.object({
  email: z
    .string()
    .min(1, { message: "Por favor digite um email valido" })
    .email(),
    password: z
    .string()
    .min(4, { message: "Sua senha pecisa ter no minimo 6 digitos" }),
});

export type LoginFormValue = z.infer<typeof loginShema>;