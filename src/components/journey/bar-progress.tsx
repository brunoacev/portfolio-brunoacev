import { cn } from "@/lib/utils";
import { Section } from "@/components/section-wrapper";
import { journeyContentData } from "@/database/journey-content-database";
import { Ping } from "../ui/ping";

function BarProgress() {
  return (
    <Section.Box className="flex md:flex-col md:gap-2">
      <div className="bg-zinc-200/60 dark:bg-zinc-800/50 w-fit h-full  rounded-full p-1.5 md:w-full">
        <div
          className={cn("p-1 h-[55%] bg-green-500 rounded-full md:w-[55%]")}
        />
      </div>
      <Section.Box className="flex flex-col justify-between md:flex-row">
        {journeyContentData.map((item, idx) => (
          <Section.Box
            key={idx}
            className="flex items-center gap-2 p-2 rounded-md dark:bg-zinc-800 bg-white text-popover-foreground shadow-md outline-none"
          >
            <Ping color={item.color} />
            <span>{item.year}</span>
          </Section.Box>
        ))}
      </Section.Box>
    </Section.Box>
  );
}

export { BarProgress };
