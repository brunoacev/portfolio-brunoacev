import * as React from "react";
import { Ping } from "./ping";
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

function SectionCard({
  className,
  color = "bg-white",
  date,
  description,
  title,
  subtitle,
  year,
}: Card) {
  const dateSplite = date?.split("-");

  if (!dateSplite) return null;
  
  return (
    <div
      className={cn(
        "w-full max-w-sm md:h-72 p-4 rounded-md dark:bg-zinc-900/80 bg-white text-popover-foreground shadow-md outline-none flex flex-col gap-4 ",
        className
      )}
    >
      <div className="flex items-center gap-2 w-full">
        <Ping color={color} />
        <span className="hover:cursor-pointer font-semibold">{year}</span>
      </div>
      <div className="flex flex-col h-full w-full gap-2 md:justify-around">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold capitalize">{title}</h4>
          <h4 className="text-sm font-semibold capitalize">{subtitle}</h4>
        </div>
        <p className="text-sm text-balance font-light">{description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              {dateSplite[0]}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              {dateSplite[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SectionCard };
