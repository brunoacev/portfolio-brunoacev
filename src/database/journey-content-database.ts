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
    title: "Operador de Estacionamento",
    subtitle: "Ancar Nordeste LTDA",
    description:
      "Guia interno sobre as operações nos shoppings geridos pela Ancar Nordeste, abrangendo promoções para Operador de Caixa, Atendimento Central ao Público, e oportunidades como Folguista de Supervisão em turnos diurnos e noturnos.",
    year: 2019,
    date: "Abril de 2016 - Outubro de 2020",
    color: "bg-yellow-300",
  },
  {
    id: randomUUID(),
    title: "Operador de Telemarketing",
    subtitle: "Meireles e Freitas Digital",
    description:
      "Atendimento SAC e Cobrança especializado para empresas parceiras, desempenhando a função crucial de operador de telemarketing.",
    year: 2022,
    date: "Outubro de 2020 - Junho de 2022",
    color: "bg-yellow-300",
  },

  {
    id: randomUUID(),
    title: "FullStack Develop",
    subtitle: "Kenzie Academy Brasil",
    description:
      "Formação concluida em uma das maiores escolas do brasil em ensino de tecnologia, utilizando Javascript e Python e seus ecossistemas.",
    year: 2023,
    date: "Março de 2022 - Março de 2023",
    color: "bg-yellow-300",
  },
  {
    id: randomUUID(),
    title: "Rust Backend Development",
    subtitle: "Alura",
    description:
      "Rust é uma linguagem de programação de sistemas que preza pela segurança, desempenho e concorrência. Utilizar os conceitos únicos de Rust, como ownership e lifetimes, me permite criar código confiável e de alta qualidade.",
    year: 2023,
    date: "Agosto de 2023 - Novembro de 2023",
    color: "bg-yellow-300",
  },
  {
    id: randomUUID(),
    title: "Go",
    subtitle: "Full Cycle",
    description:
      "Aprendendo uma nova stack de tecnologia e seu ecossistema. Go, também conhecida como Golang é uma linguagem de programação de código aberto projetada para ser eficiente, desenvolvida pela Google.",
    year: 2024,
    date: "Janeiro de 2024 - Atualmente",
    color: "bg-blue-500",
  },
  {
    id: randomUUID(),
    title: "ONE",
    subtitle: "Oracle Next Education",
    description:
      "Aprovado para participar do projeto ONE em parceria com a Alura, uma das maiores escolas tech do país para desenvolvimento de novos talentos na programação. ",
    year: 2024,
    date: "Janeiro de 2024 - Atualmente",
    color: "bg-blue-500",
  },
  {
    id: randomUUID(),
    title: "Engenharia de Software",
    subtitle: "UNIFCV",
    description:
      "Procuro ter uma formação sólida para entregar análise de requisitos, design de software, codificação eficiente e a realização de testes rigorosos para garantir a qualidade e robustez das soluções que desenvolvo.",
    year: 2026,
    date: "Agosto de 2022 - Agosto de 2026",
    color: "bg-blue-500",
  },
];

export { type DataContent, journeyContentData };
