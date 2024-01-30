import { randomUUID } from "crypto";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  url: string;
  image: string;
};

const projectContentData: Project[] = [
  {
    id: randomUUID(),
    title: "Encriptação de mensagens",
    subtitle: "Alura + ONE - Oracle Next Education",
    description:
      "Primeiro challenger oferecido pela Alura em parceiria com a Oracle, projeto simples de encriptação e decodificação e mensagens utilizando conceitos básicos de lógica de programação.",
    url: "https://challenge-alura-brunoacev.vercel.app/",
    date: "Janeiro de 2023",
    image: "/logos/alura.png",
  },
  {
    id: randomUUID(),
    title: "War Games",
    subtitle: "Private Cabal Server",
    description:
      "Servidor privado MMORPG, Classic Cabal Game and Free To Play. Projeto esta em desenvolvimento, com data de lançamento para Julho 2024.",
    url: "https://war-games.vercel.app/",
    date: "Atualmente",
    image: "/logos/wargames.png",
  },
  {
    id: randomUUID(),
    title: "MF ADV",
    subtitle: "Meireles e Freitas Advocacia",
    description:
      "Plataforma privada para gerenciamento de dados jurídicos, com acesso a gráficos detalhados, leitura de banco de dados de clientes interno e relátorios de acompanhamento semanal, mensal, semestral e anual.",
    url: "/",
    date: "Atualmente",
    image: "/logos/adv.png",
  },
  {
    id: randomUUID(),
    title: "V1 Talk-Edge",
    subtitle: "Scio TECH",
    description:
      "Ecossistema empresarial para o setor de atendimento digital, fornecendo maior flexibilidade no acompanhamento de dados de clientes interno, designer intuitivo e ambiente para desenvolvimento profissional.",
    url: "/",
    date: "Atualmente",
    image: "/logos/scio.png",
  },
];

export { projectContentData };
