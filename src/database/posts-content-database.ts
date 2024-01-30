import { randomUUID } from "crypto";

type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
  userImage: string;
  name: string;
  year: string;
  tags: string[];
  url: string;
};

const Posts: Post[] = [
  {
    id: randomUUID(),
    title: "Primeiro Titulo",
    description: "Descrubra mais sobre javascript alternativo",
    name: "Bruno Azevedo",
    year: "Janeiro 2023",
    tags: ["Educação"],
    userImage: "/perfil.jpg",
    image: "/svgs/note.svg",
    url: "/blog",
  },
];

export { Posts };
