import { journeyContentData } from "@/database/journey-content-database";
import { SectionCard } from "./section-card";
import { SectionContent } from "./section-content";
import { SectionAnotation } from "./section-anotations";
import { SectionHeader } from "./section-header";
import { Ping } from "./ping";

function Journey() {
  return (
    <section className="flex flex-col gap-10 min-h-full dark:bg-zinc-500/10 p-4">
      <SectionHeader>Trajeto</SectionHeader>
      <SectionAnotation>
        <span className="font-semibold">Anotações:</span>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Ping color="bg-yellow-300" />
            <span className="text-sm font-semibold">Já concluido</span>
          </div>
          <div className="flex items-center gap-2">
            <Ping color="bg-blue-500" />
            <span className="text-sm font-semibold">Em progresso</span>
          </div>
        </div>
      </SectionAnotation>
      <SectionContent className="flex h-full gap-4 md:flex-col">
        <div className="flex min-h-full gap-1 md:flex-col md:w-full">
          <div className="bg-zinc-200/60 dark:bg-zinc-900/50 w-fit rounded-full p-1.5 md:w-full">
            <div className="p-1 h-[55%] bg-green-500 rounded-full md:w-[55%]" />
          </div>

          <div className="flex flex-col justify-between md:flex-row">
            {journeyContentData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-md dark:bg-zinc-900/80 bg-white text-popover-foreground shadow-md outline-none"
              >
                <Ping color={item.color} />
                <span>{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-4 flex-wrap flex-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {journeyContentData.map((content) => (
            <SectionCard {...content} key={content.id} />
          ))}
        </div>
      </SectionContent>
    </section>
  );
}

export { Journey };
