import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, title, description } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["brunoacev@gmail.com"],
      subject: title,
      react: EmailTemplate({ description, email, name, title }),
      text: "Email encaminhado via portfólio",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
