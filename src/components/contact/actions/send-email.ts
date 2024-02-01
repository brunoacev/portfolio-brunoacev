"use server";

import { z } from "zod";
import { ContactSchema } from "@/schemas/form-schema";

async function SendEmailAction(initialState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    title: formData.get("title"),
    description: formData.get("description"),
  };

  try {
    const safeData = ContactSchema.safeParse(rawData);

    if (!safeData.success) {
      return {
        message: "Erro ao encaminhar informações.",
        status: 400,
      };
    }

    await fetch("http://localhost:3000/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(safeData.data),
    });

    return {
      message: "Mensagem enviada com sucesso!",
      status: 200,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: error.errors[0]["message"],
        status: 400,
      };
    }

    return {
      message: "Algo está errado...",
      status: 400,
    };
  }
}

export { SendEmailAction };
