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
      "HTML, CSS, Javascript, Typescript, Node JS, React JS, Next JS, React Native, Tailwind CSS, Python, Django, Git/Githb, PostgreSQL",
    year: 2023,
    date: "Março de 2022 - Março de 2023",
    color: "bg-yellow-300",

  },
  {
    id: randomUUID(),
    title: "Engenharia de Software",
    subtitle: "UNIFANOR Wyden",
    description:
      "Computação em Nuvem, Matemática e Lógica, Processos em Desenvolvimento de Software, Segurança da Informação, Banco de Dados",
    year: 2025,
    date: "Fevereiro de 2025 - Agosto de 2029",
    color: "bg-blue-500",
 
  },
];

export { type DataContent, journeyContentData };
