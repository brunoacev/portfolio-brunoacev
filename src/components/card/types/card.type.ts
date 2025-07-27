type CardType = {
  id: string | number;
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  date: string;
} & (JourneyCard | ProjectCard);

type JourneyCard = {
  type: "JourneyCard";
  year: number;
  color: string;
};

type ProjectCard = {
  type: "ProjectCard";
  image: string;
  urlToPreview?: string;
  urlToGithub?: string;
  stack: string[];
  contractType?: string;
  projectOrigin?: string;
};

export type { CardType };
