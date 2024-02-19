type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  urlToPreview: string;
  image: string;
  stack: string[];
};

const projectContentData: Project[] = [
  {
    id: "01",
    title: "Encriptação de mensagens",
    subtitle: "Alura + ONE - Oracle Next Education",
    description:
      "Primeiro challenger oferecido pela Alura em parceiria com a Oracle, projeto simples de encriptação e decodificação e mensagens utilizando conceitos básicos de lógica de programação.",
    urlToPreview: "https://challenge-alura-brunoacev.vercel.app/",
    date: "Janeiro de 2023",
    image: "/logos/alura.png",
    stack: ["Vite", "Tailwind"],
  },
  {
    id: "02",
    title: "War Games",
    subtitle: "Private Cabal Server",
    description:
      "Servidor privado MMORPG, Classic Cabal Game and Free To Play. Projeto esta em desenvolvimento, com data de lançamento para Julho 2024.",
    urlToPreview: "https://war-games-demo.vercel.app/",
    date: "Atualmente",
    image: "/logos/wargames.png",
    stack: ["NextJS", "Stripe", "Tailwind", "PostgreSQL", "Docker"],
  },
];

export { projectContentData };
