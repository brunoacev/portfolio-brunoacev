import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "lucide-react";

type CardData = {
  year: string;
  title: string;
  description: string;
  date: string;
};

function CardHover({ date, description, title, year }: CardData) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer">{year}</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">{date}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export { CardHover };
