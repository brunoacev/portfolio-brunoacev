import * as React from "react";

function SectionAnotation({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 px-3 py-2">{children}</div>;
}

export { SectionAnotation };
