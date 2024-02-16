type CardType = {
  id: string;
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
  urlToPreview: string;
  stack: string[];
};

export type { CardType };
