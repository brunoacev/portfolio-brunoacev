import * as React from "react";
import { cn } from "@/lib/utils";

type Content = {
  children: React.ReactNode;
  className?: string;
};

function Content({ children, className }: Content) {
  return <div className={cn("", className)}>{children}</div>;
}

export { Content };
