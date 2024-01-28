import { randomUUID } from "crypto";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  url: string;
};

const projectContentData: Project[] = [
  {
    id: randomUUID(),
    title: "MF ADV",
    subtitle: "Meireles e Freitas Advocacia",
    description:
      "Descrição sobre o projeto com proposito de desenvolver um ambiente de trabalho voltado para leitura de estatisticas, graficos e controle de casos.",
    url: "/projects/mf-adv",
    date: "Janeiro de 2023 - Fevereiro de 2023",
  },
  {
    id: randomUUID(),
    title: "MF ADV",
    subtitle: "Meireles e Freitas Advocacia",
    description:
      "Descrição sobre o projeto com proposito de desenvolver um ambiente de trabalho voltado para leitura de estatisticas, graficos e controle de casos.",
    url: "/projects/mf-adv",
    date: "Janeiro de 2023 - Fevereiro de 2023",
  },
  {
    id: randomUUID(),
    title: "MF ADV",
    subtitle: "Meireles e Freitas Advocacia",
    description:
      "Descrição sobre o projeto com proposito de desenvolver um ambiente de trabalho voltado para leitura de estatisticas, graficos e controle de casos.",
    url: "/projects/mf-adv",
    date: "Janeiro de 2023 - Fevereiro de 2023",
  },
];

export { projectContentData };
