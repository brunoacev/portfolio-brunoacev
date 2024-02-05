type ContentBlock = {
  subTitle: string;
  description: string;
};

type ContentRef = {
  title: string;
  url: string;
};

type User = {
  name: string;
  avatar: string;
  tags: string[];
  year: string;
};

type PostType = {
  id: string;
  title: string;
  subTitle: string;
  slugUrl: string;
  image: string;

  content: ContentBlock[];
  refs: ContentRef[];
  user: User;
};

const PostsData: PostType[] = [
  {
    id: "1",
    title: "Introdução ao Javascript",
    subTitle: "Variáveis em JavaScript: Uma Exploração Detalhada",
    slugUrl: "/blog/introduction-to-js",
    image: "/svgs/note.svg",
    content: [
      {
        subTitle: "O que são variaveis no nosso querido e amado Javascript?",
        description:
          "JavaScript, sendo uma linguagem de programação versátil e amplamente utilizada, incorpora o conceito fundamental de variáveis. Variáveis são essenciais para armazenar, manipular e referenciar dados durante a execução de um programa. Vamos mergulhar mais fundo nesse conceito fundamental que desempenha um papel crucial na dinâmica e na flexibilidade do JavaScript.",
      },
      {
        subTitle: "1. Declaração de Variáveis:",
        description:
          "Em JavaScript, você pode declarar variáveis usando as palavras-chave var, let e const. var era a forma tradicional de declarar variáveis, mas com a introdução do ECMAScript 6 (ES6), let e const oferecem escopo de bloco, substituindo muitos casos de uso de var.",
      },
      {
        subTitle: "2. Escopo de Variáveis:",
        description:
          "O escopo de uma variável determina onde ela pode ser acessada no código. var tem escopo de função, enquanto let e const têm escopo de bloco. Isso significa que variáveis declaradas com let e const são mais restritas em termos de onde podem ser acessadas.",
      },
      {
        subTitle: "3. Atribuição de Valores:",
        description:
          "As variáveis em JavaScript podem ser inicializadas ao serem declaradas ou receber valores posteriormente. Atribuímos valores usando o operador de atribuição '=' ",
      },
      {
        subTitle: "4. Tipos de Dados:",
        description:
          "JavaScript é uma linguagem dinamicamente tipada, o que significa que as variáveis podem conter diferentes tipos de dados ao longo do tempo. Os tipos de dados incluem primitivos (números, strings, booleanos, etc.) e objetos.",
      },
      {
        subTitle: "5. Constantes:",
        description:
          "Variáveis declaradas com const são constantes e não podem ser reatribuídas após a inicialização. Isso é útil para valores que não devem ser alterados durante a execução do programa.",
      },
      {
        subTitle: "6. Hoisting:",
        description:
          "Em JavaScript, as declarações de variáveis são içadas (hoisted) para o topo do seu contexto de execução durante a fase de compilação. Isso significa que você pode usar uma variável antes de ela ser declarada no código.",
      },
      {
        subTitle: "7. Boas Práticas:",
        description:
          "É uma prática recomendada declarar variáveis com let ou const em vez de var, para evitar comportamentos inesperados relacionados ao escopo. Dê nomes significativos às variáveis para tornar o código mais legível.",
      },
    ],
    refs: [
      {
        title: "Javascript - mdm web docs",
        url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
      {
        title: "JavaScript by Pluralsight",
        url: "https://www.javascript.com/learn/variables",
      },
    ],
    user: {
      name: "Bruno Azevedo",
      avatar: "/perfil.jpg",
      tags: ["JS", "Programing Language", "Javascript"],
      year: "2023",
    },
  },
];

export { PostsData, type PostType };
