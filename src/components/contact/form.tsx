import { Textarea } from "../ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormButton } from "./button";
import { SendEmailAction } from "./actions/send-email";

function ContactForm() {
  return (
    <form action={SendEmailAction}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            placeholder="Nome do responsável"
            className="dark:bg-zinc-700"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Email para contato"
            className="dark:bg-zinc-700"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="title">Titulo</Label>
          <Input
            id="title"
            name="title"
            placeholder="Titulo do conteúdo"
            className="dark:bg-zinc-700"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Escreva uma breve descrição sobre seu projeto ou proposta."
            className="dark:bg-zinc-700"
          />
        </div>
        <div className="flex justify-end">
          <FormButton />
        </div>
      </div>
    </form>
  );
}

export { ContactForm };
