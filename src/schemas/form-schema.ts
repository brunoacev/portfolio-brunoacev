import { z } from "zod";

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  title: z.string().max(30, "Titulo muito longo"),
  description: z.string(),
});

type ContactType = z.infer<typeof ContactSchema>;

export { type ContactType, ContactSchema };
