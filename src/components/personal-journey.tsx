import { Ping } from "./ping";
import { TimeCard } from "./time-card";

const data = [
  {
    id: 1,
    title: "ONE - Oracle Next Education",
    description:
      "Aprovado para participar do projeto ONE em parceria com a Alura, uma das maiores escolas tech do país para desenvolvimento de novos talentos na programação. ",
    year: "2024",
    date: "Fevereiro de 2024 - Fevereiro de 2025 ",
    position: "top",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Desenvolvedor Full Stack - Kenzie Academy Brasil",
    description:
      "Formação concluida em uma das maiores escolas do brasil em ensino de tecnologia, utilizando Javascript e Python e seus ecossistemas.",
    year: "2023",
    date: "Março de 2022 - Março de 2023",
    position: "bottom",
    color: "bg-yellow-200",
  },
  {
    id: 3,
    title: "ITech 2022 - Projeto MF ADV",
    description:
      "Plataforma para gerenciamento de atividades no setor de advocacia em colaboração com as empresas Meireles e Freitas Digital, MF Advocacia e Scio Tech. Para mais informações acesse a opção projetos no menu de navegação.",
    year: "2022",
    date: "Dezembro de 2021 - Maio de 2022",
    position: "top",
    color: "bg-yellow-200",
  },
  {
    id: 4,
    title: "Operador de Telemarketing - Meireles e Freitas Digital",
    description: "Atendimento sac e cobrança para empresas parceiras.",
    year: "2022",
    date: "Outubro de 2020 - Junho de 2022",
    position: "bottom",
    color: "bg-yellow-200",
  },
  {
    id: 5,
    title: "Operador de Estacionamento - Ancar Nordeste LTDA",
    description:
      "Orientador interno sobre o funcionamento das atividades realizadas dos shoppings administrados pela Ancar Nordeste, Promoções para Operador de Caixa e Atendimento Central ao Público, Folguista de Supervisão diurno e noturno.",
    year: "2019",
    date: "Abril de 2016 - Outubro de 2019",
    position: "top",
    color: "bg-yellow-200",
  },
];

function PersonalJourney() {
  return (
    <section className="flex flex-col  gap-10 min-h-full dark:bg-zinc-500/10">
      <div className="w-full border-b-2 dark:border-zinc-700/50">
        <h2 className="text-xl p-2">Trajeto</h2>
      </div>

      <div className="m-auto bg-zinc-200/60 dark:bg-zinc-800/60 h-1 flex items-center justify-around gap-4 w-full">
        {data.map(({ color, date, description, title, year, position, id }) => {
          return (
            <TimeCard
              data={{ date, description, title, year }}
              color={color}
              position={position}
              key={id}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-4 px-3 py-2">
        <span className="font-semibold">Anotações:</span>
        <span className="text-sm font-medium">
          Posicione o cursor do mouse no ano para vizualizar seu conteúdo.
        </span>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Ping color="bg-yellow-200" />
            <span className="text-sm font-semibold">Já concluido</span>
          </div>
          <div className="flex items-center gap-2">
            <Ping color="bg-blue-500" />
            <span className="text-sm font-semibold">Em progresso</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { PersonalJourney };
