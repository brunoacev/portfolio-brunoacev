import * as React from "react";
import { Ping } from "../ui/ping";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

type Card = {
  id?: string;
  color?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  year?: number;
  date?: string;
  className?: string;
};

function Card({ content }: { content: Card }) {
  return (
    <div
      className={cn(
        "w-full max-w-sm md:h-72 p-4 dark:border-l border:border-t rounded-md dark:bg-zinc-900/80 bg-white text-popover-foreground shadow-md outline-none flex flex-col gap-4 ",
        content.className
      )}
    >
      <div className="flex items-center gap-2 w-full">
        <Ping color={content.color || "bg-white"} />
        <span className="hover:cursor-pointer font-semibold">
          {content.year}
        </span>
      </div>
      <div className="flex flex-col h-full w-full gap-2 md:justify-around">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold capitalize">{content.title}</h4>
          <h4 className="text-sm font-semibold capitalize">
            {content.subtitle}
          </h4>
        </div>
        <p className="text-sm text-balance font-light">{content.description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              {content.date?.split("-")[0]}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              {content.date?.split("-")[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
