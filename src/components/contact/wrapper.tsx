import * as React from "react";

function FormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full dark:bg-zinc-800/30 bg-white rounded-md p-4 flex flex-col gap-4">
      {children}
    </div>
  );
}

export { FormWrapper };
