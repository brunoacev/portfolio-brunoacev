import * as React from "react";
import { cn } from "@/lib/utils";

type Header = {
  children: React.ReactNode;
  className?: string;
};

function Header({ children, className }: Header) {
  return (
    <div className={cn("w-full border-b-2 dark:border-zinc-700/50", className)}>
      <h2 className="text-xl p-2">{children}</h2>
    </div>
  );
}

export { Header };
