import Image from "next/image";
import { Section } from "../section-wrapper";

function AboutMe() {
  return (
    <Section.Wrapper className="w-full min-h-full grid place-items-center">
      <Section.Content className="flex flex-col items-center w-fit gap-10 text-sm tracking-wide md:flex-row">
        <Section.Box className="h-fit p-4">
          <Image
            alt="Foto pessoal de perfil"
            src={"/perfil.jpg"}
            width={300}
            height={300}
            className="rounded-md max-w-xs"
          />
        </Section.Box>

        <Section.Box className="flex flex-col gap-2 max-w-md px-4">
          <h1 className="text-base font-semibold">
            Olá, me chamo Bruno Azevedo.
          </h1>
          <p>
            Desenvolvedor entusiasmado em criar soluções utilizando tecnologias
            como <span className="underline tracking-wider">Javascript</span>,{" "}
            <span className="underline tracking-wider">Python</span> e seus
            ecossistemas!
          </p>
          <span className="border-b py-1">
            Nesse portfolio você vai entender mais sobre:
          </span>
          <ul className="flex flex-col gap-2 ml-4">
            <li>Trajeto educacional e profissional.</li>
            <li>Projetos e participações.</li>
          </ul>
        </Section.Box>
      </Section.Content>
    </Section.Wrapper>
  );
}

export { AboutMe };
