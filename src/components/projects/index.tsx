import Link from "next/link";
import { projectContentData } from "@/database/project-content-database";
import { CalendarIcon } from "lucide-react";
import { Section } from "../section-wrapper";
import Image from "next/image";

function Projects() {
  return (
    <Section.Wrapper>
      <Section.Header>Projetos</Section.Header>

      <Section.Content className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projectContentData.map((item) => (
          <div
            key={item.id}
            className="w-full  p-4 rounded-md dark:border-l dark:border-t dark:bg-zinc-900/80 bg-white text-popover-foreground shadow-md outline-none grid md:grid-cols-2 gap-4"
          >
            <div className="w-full h-full flex flex-col justify-between gap-4">
              <Image
                alt="Logo da empresa"
                src={item.image}
                width={300}
                height={300}
                className="object-fill rounded-md"
              />
              <Link
                href={item.url}
                target="_blank"
                className="text-sm hover:underline"
              >
                Acesse o projeto
              </Link>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold capitalize">
                  {item.title}
                </h4>
                <h4 className="text-sm font-semibold capitalize">
                  {item.subtitle}
                </h4>
              </div>
              <p className="text-sm text-balance font-light dark:text-zinc-300">
                {item.description}
              </p>
              <div className="flex flex-col gap-2 items-start">
                {item.date.split("-").map((item, idx) => (
                  <div className="flex items-center gap-1" key={idx}>
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Section.Content>
    </Section.Wrapper>
  );
}

export { Projects };
