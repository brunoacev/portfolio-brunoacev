import { cn } from "@/lib/utils";
import { CardHover } from "./card-hover";
import { Ping } from "./ping";

type Card = {
  color: string;
  position: string;
  data: {
    year: string;
    title: string;
    description: string;
    date: string;
  };
};

function TimeCard({ color, position, data }: Card) {
  return (
    <div className="flex items-center gap-2 relative">
      <Ping color={color} />
      <div
        className={cn(
          "bg-zinc-200/50 dark:bg-zinc-700/30 p-2 rounded-md absolute left-5",
          {
            ["top-[-10px] left-[-70px] md:top-[-50px] md:left-2"]:
              position == "top",
            ["bottom-[-15px] md:bottom-[-50px] md:left-4"]:
              position == "bottom",
          }
        )}
      >
        <CardHover {...data} />
      </div>
    </div>
  );
}

export { TimeCard };
