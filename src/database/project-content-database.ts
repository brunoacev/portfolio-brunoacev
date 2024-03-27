type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  urlToPreview: string;
  urlToGithub: string;
  image: string;
  stack: string[];
};

const projectContentData: Project[] = [
  {
    id: 1,
    title: "War Games",
    subtitle: "Private Cabal Server",
    description:
      "Private server MMORPG, Classic Cabal Game and Free To Play. Projeto esta em periodo de desenvolvimento, com data de lançamento para Julho 2024.",
    urlToPreview: "https://war-games-demo.vercel.app/",
    urlToGithub: "https://github.com/brunoacev/war-games-demo",
    date: "Atualmente",
    image: "/logos/wargames.png",
    stack: [
      "Freelancer",
      "NextJS",
      "Stripe",
      "Tailwind",
      "PostgreSQL",
      "Docker",
    ],
  },
];

export { projectContentData };
