import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  description: string;
  title: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  description,
  email,
  name,
  title,
}) => (
  <div className="border flex flex-col gap-2">
    <h1>{title}</h1>
    <p>Descrição: {description}</p>
    <span>
      Responsavel: {name} - Enviado por: {email}
    </span>
  </div>
);
