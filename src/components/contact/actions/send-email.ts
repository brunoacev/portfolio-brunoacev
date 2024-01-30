"use server";

import { ContactSchema } from "@/schemas/form-schema";

function SendEmailAction(data: FormData) {
  const rawData = {
    name: data.get("name"),
    email: data.get("email"),
    title: data.get("title"),
    description: data.get("description"),
  };

  const safeData = ContactSchema.safeParse(rawData);
  console.log({ safeData });
}

export { SendEmailAction };
