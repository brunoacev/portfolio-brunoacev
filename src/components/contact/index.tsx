import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "../section-wrapper";

function Contact() {
  return (
    <Section.Wrapper>
      <Section.Header>Contato</Section.Header>

      <Section.Content className="m-auto">
        <Card className="w-full dark:bg-zinc-800/70">
          <CardHeader>
            <CardTitle>Contato</CardTitle>
            <CardDescription>
              Apresente sua proposta ou ideia de projeto. Em breve, enviarei uma
              resposta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Nome do responsável"
                    className="dark:bg-zinc-700"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Email para contato"
                    className="dark:bg-zinc-700"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="type-contact">Tipo</Label>
                  <Select>
                    <SelectTrigger
                      id="type-contact"
                      className="dark:bg-zinc-700"
                    >
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="dark:bg-zinc-700"
                    >
                      <SelectItem value="individual-project">
                        Projeto individual
                      </SelectItem>
                      <SelectItem value="job-offer">
                        Proposta de Trabalho
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Textarea
                    placeholder="Escreva uma breve descrição sobre seu projeto ou proposta."
                    className="dark:bg-zinc-700"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" type="reset">
              Cancelar
            </Button>
            <Button variant="secondary" type="submit">
              Enviar
            </Button>
          </CardFooter>
        </Card>
      </Section.Content>
    </Section.Wrapper>
  );
}

export { Contact };
