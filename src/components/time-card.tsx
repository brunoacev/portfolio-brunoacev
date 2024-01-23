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
            ["top-[-45px]"]: position == "top",
            ["bottom-[-45px]"]: position == "bottom",
          }
        )}
      >
        <CardHover {...data} />
      </div>
    </div>
  );
}

export { TimeCard };
