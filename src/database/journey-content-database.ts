import { randomUUID } from "node:crypto";

type DataContent = {
  id: string;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  year: number;
  date: string;
};

const journeyContentData: DataContent[] = [
  {
    id: randomUUID(),
    title: "FullStack Develop",
    subtitle: "Kenzie Academy Brasil",
    description:
      "Formação concluida em uma das maiores escolas do brasil em ensino de tecnologia, utilizando Javascript, Python e seus ecossistemas.",
    year: 2023,
    date: "Março de 2022 - Março de 2023",
    color: "bg-yellow-300",
  },
  {
    id: randomUUID(),
    title: "Engenharia de Software",
    subtitle: "UNIFANOR Wyden",
    description:
      "Procuro ter uma formação sólida para entregar análise de requisitos, design de software, codificação eficiente e a realização de testes rigorosos para garantir a qualidade e robustez das soluções que desenvolvo.",
    year: 2025,
    date: "Fevereiro de 2025 - Agosto de 2029",
    color: "bg-blue-500",
  },
];

export { type DataContent, journeyContentData };
