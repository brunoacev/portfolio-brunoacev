import Link from "next/link";
import { SectionContent } from "../section-content";
import { SectionHeader } from "../section-header";
import { projectContentData } from "@/database/project-content-database";
import { CalendarIcon } from "lucide-react";

function Projects() {
  return (
    <section className="flex flex-col gap-10 min-h-full dark:bg-zinc-700/10 p-4">
      <SectionHeader>Projetos</SectionHeader>

      <SectionContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projectContentData.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-sm h-60 sm:h-64 p-4 rounded-md dark:bg-zinc-900/80 bg-white text-popover-foreground shadow-md outline-none flex flex-col justify-between"
          >
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold capitalize">{item.title}</h4>
              <h4 className="text-sm font-semibold capitalize">
                {item.subtitle}
              </h4>
            </div>
            <p className="text-sm text-balance font-light dark:text-zinc-300">
              {item.description}
            </p>
            <div className="flex flex-col gap-2 items-start">
              <div className="flex items-center gap-1">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  {item.date.split("-")[0]}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  {item.date.split("-")[1]}
                </span>
              </div>
            </div>
            <Link href={item.url} className="text-sm hover:underline">
              Veja mais sobre
            </Link>
          </div>
        ))}
      </SectionContent>
    </section>
  );
}

export { Projects };
