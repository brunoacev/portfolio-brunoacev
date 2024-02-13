import { randomUUID } from "crypto";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  urlToPreview: string;
  image: string;
};

const projectContentData: Project[] = [
  {
    id: randomUUID(),
    title: "Encriptação de mensagens",
    subtitle: "Alura + ONE - Oracle Next Education",
    description:
      "Primeiro challenger oferecido pela Alura em parceiria com a Oracle, projeto simples de encriptação e decodificação e mensagens utilizando conceitos básicos de lógica de programação.",
    urlToPreview: "https://challenge-alura-brunoacev.vercel.app/",
    date: "Janeiro de 2023",
    image: "/logos/alura.png",
  },
  {
    id: randomUUID(),
    title: "War Games",
    subtitle: "Private Cabal Server",
    description:
      "Servidor privado MMORPG, Classic Cabal Game and Free To Play. Projeto esta em desenvolvimento, com data de lançamento para Julho 2024.",
    urlToPreview: "https://war-games.vercel.app/",
    date: "Atualmente",
    image: "/logos/wargames.png",
  },

  {
    id: randomUUID(),
    title: "Talk-Edge",
    subtitle: "Projeto Pessoal",
    description:
      "Ecossistema empresarial para o setor de atendimento digital, fornecendo maior flexibilidade no acompanhamento de dados de clientes interno, designer intuitivo e ambiente para desenvolvimento profissional.",
    urlToPreview: "https://talk-edge.vercel.app/",
    date: "Atualmente",
    image: "/svgs/personal-project.svg",
  },
];

export { projectContentData };
