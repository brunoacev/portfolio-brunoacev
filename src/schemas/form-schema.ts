import { z } from "zod";

const ContactSchema = z.object({
  name: z
    .string()
    .min(3, "Campo nome precisa ser preenchido com no mínimo 3 caracters."),
  email: z
    .string()
    .min(5, "Campo email precisa ser preenchido com no mínimo 5 caracters.")
    .email("Formato de email inválido."),
  title: z
    .string()
    .min(3, "Campo titulo precisa ser preenchido com no mínimo 3 caracters.")
    .max(30, "Campo de titulo está muito longo."),
  description: z
    .string()
    .min(
      3,
      "Campo descrição precisa ser preenchido com no mínimo 3 caracters."
    ),
});

export { ContactSchema };
