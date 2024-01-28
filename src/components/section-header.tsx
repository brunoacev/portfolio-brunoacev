import * as React from "react";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full border-b-2 dark:border-zinc-700/50">
      <h2 className="text-xl p-2">{children}</h2>
    </div>
  );
}

export { SectionHeader };
