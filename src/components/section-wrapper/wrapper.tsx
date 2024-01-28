import * as React from "react";
import { cn } from "@/lib/utils";

type Wrapper = {
  children: React.ReactNode;
  className?: string;
};

function Wrapper({ children, className }: Wrapper) {
  return (
    <section className={cn("flex flex-col gap-10 min-h-full p-4", className)}>
      {children}
    </section>
  );
}

export { Wrapper };
