type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  urlToPreview?: string;
  urlToGithub?: string;
  image: string;
  stack: string[];
  contractType?: "CLT" | "freelancer";
  projectOrigin?: "personal" | "professional";

};

const projectContentData: Project[] = [
  {
    id: 1,
    title: "AGATEK",
    subtitle: "Auxiliar de TI",
    description:
      "Suporte técnico a hardware e software, Manutenção preventiva de computadores, Formatação, Montagem e Upgrade de máquinas, Instalação de sistemas operacionais (Windows e Linux).",
    date: "Fevereiro de 2024 - Atualmente",
    image: "/logos/agatek.png",
    stack: ["Trabalho Integral CLT", "Pacote Office", "Redes (TCP/IP, cabeamento, roteadores)", "Ferramentas de Acesso Remoto (AnyDesk e TeamViwer)"],
    contractType: "CLT"
  },
  {
    id: 2,
    title: "War Games",
    subtitle: "Private Cabal Server",
    description:
      "Criação de página web com Next JS, Typescript, Tailwind CSS e PostgreSQL, Projeto responsivo, Designer definido pelo proprietário e Integração com banco de dados.",
    urlToPreview: "https://war-games-demo.vercel.app/",
    urlToGithub: "https://github.com/brunoacev/war-games-demo",
    date: "Outubro de 2023",
    image: "/logos/wargames.png",
    stack: ["Freelancer", "NextJS", "Stripe", "Tailwind", "PostgreSQL"],
    contractType: "freelancer",
    projectOrigin: "professional"
    
  },
   {
    id: 3,
    title: "TALK EDGE",
    subtitle: "Meireles e Freitas Digital",
    description:
      "Projeto desenvolvido com o objetivo de aprimorar meus conhecimentos em desenvolvimento de sistemas, tendo como base as rotinas e funcionalidades observadas durante minha experiência na Meireles e Freitas.",
    urlToPreview: "https://talk-edge.vercel.app/",
    urlToGithub: "https://github.com/brunoacev/talk-edge",
    date: "Fevereiro de 2024",
    image: "/logos/tkedge.jpg",
    stack: ["Projeto Pessoal", "NextJS", "Tailwind"],
    projectOrigin: "personal"
  },
  {
    id: 4,
    title: "Meireles e Freitas Digital",
    subtitle: "Operador de Atendimento Digital",
    description:
      "Atuação no SAC Digital, Prestando suporte ao cliente via canais online (Chat, Email, Telefone), Experiência com cobrança bancaria e atendimento a consumidores do setor de Energia Elétrica, Realizando negociações, esclarecimento de débitos e orientações técnicas.",
    date: "Outubro de 2020 - Dezembro de 2023",
    image: "/logos/meireles.jpeg",
    stack: ["Trabalho Integral CLT"],
    contractType: "CLT"
  },
   {
    id: 5,
    title: "Ancar Nordeste",
    subtitle: "Atendimento Interno",
    description:
      "Atuação como orientador de estacionamento, Operador interno de caixa e Suporte ao atendimento de clientes nas áreas do Mall do shopping.",
    date: "Abril de 2014 - Agosto de 2020",
    image: "/logos/ancar.jpeg",
    stack: ["Trabalho Integral CLT"],
    contractType: "CLT"
  },
   
];

export { projectContentData };
