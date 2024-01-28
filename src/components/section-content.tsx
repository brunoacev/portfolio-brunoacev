import { cn } from "@/lib/utils";
import * as React from "react";

function SectionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

export { SectionContent };
