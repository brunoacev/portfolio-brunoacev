import { SectionHeader } from "../section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionContent } from "../section-content";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function Contact() {
  return (
    <section className="flex flex-col gap-10 min-h-full dark:bg-zinc-500/10 p-4">
      <SectionHeader>Contato</SectionHeader>

      <SectionContent className="m-auto">
        <Card className="w-full dark:bg-zinc-900">
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
                  <Input id="name" placeholder="Nome do responsável" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email para contato" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="type-contact">Tipo</Label>
                  <Select>
                    <SelectTrigger id="type-contact">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent position="popper">
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
                  <Textarea placeholder="Escreva uma breve descrição sobre seu projeto ou proposta." />
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
      </SectionContent>
    </section>
  );
}

export { Contact };
