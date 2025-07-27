import * as React from "react";
import { Ping } from "../ui/ping";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { CardType } from "./types/card.type";
import Image from "next/image";
import Link from "next/link";

function Card(props: CardType) {
  if (props.type === "JourneyCard") {
    return (
      <div
        className={cn(
          "w-full max-w-sm md:h-72 p-4 dark:border-l border:border-t rounded-md dark:bg-zinc-900/80 bg-white text-popover-foreground shadow-md outline-none flex flex-col gap-4 ",
          props.className
        )}
      >
        <div className="flex items-center gap-2 w-full">
          <Ping color={props.color} />
          <span className="hover:cursor-pointer font-semibold">
            {props.year}
          </span>
        </div>
        <div className="flex flex-col h-full w-full gap-2 md:justify-around">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold capitalize">{props.title}</h4>
            <h4 className="text-sm font-semibold capitalize">
              {props.subtitle}
            </h4>
          </div>
          <p className="text-sm text-balance font-light">{props.description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                {props.date?.split("-")[0]}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                {props.date?.split("-")[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (props.type === "ProjectCard") {
    return (
      <div
        key={props.id}
        className="w-full  p-4 rounded-md dark:border-l dark:border-t dark:bg-zinc-900/80 bg-white text-popover-foreground shadow-md outline-none grid md:grid-cols-2 gap-4"
      >
        <div className="w-full h-full flex flex-col justify-between gap-4">
          <Image
            alt="Logo da empresa"
            src={props.image}
            width={300}
            height={300}
            className="object-fill rounded-md"
          />
          {props.contractType !== "CLT" && (
            <div className="flex flex-col gap-1">
              <Link
                href={props.urlToPreview}
                target="_blank"
                className="text-sm hover:underline"
              >
                Acesse a Demo
              </Link>
              <Link
                href={props.urlToGithub}
                target="_blank"
                className="text-sm hover:underline"
              >
                Acesse ao GitHub
              </Link>
            </div>
          )}


        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold capitalize">{props.title}</h4>
            <h4 className="text-sm font-semibold capitalize">
              {props.subtitle}
            </h4>
          </div>
          <p className="text-sm text-balance font-light dark:text-zinc-300">
            {props.description}
          </p>
          <div className="flex flex-col gap-2 items-start">
            {props.date.split("-").map((item, idx) => (
              <div className="flex items-center gap-1" key={idx}>
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {props.stack.map((item, idx) => (
              <span
                key={idx}
                className="p-2 tracking-wider text-center text-xs bg-zinc-100 dark:bg-zinc-600/20 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export { Card };
