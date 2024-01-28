import * as React from "react";
import { cn } from "@/lib/utils";

type Box = {
  children: React.ReactNode;
  className?: string;
};

function Box({ children, className }: Box) {
  return <div className={cn("", className)}>{children}</div>;
}

export { Box };
