"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleToggle = () => {
    theme === "system" && setTheme("light");
    theme === "light" && setTheme("dark");
    theme === "dark" && setTheme("light");
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="dark:bg-zinc-700 w-fit bg-zinc-200 hover:bg-zinc-300 transition-all duration-300 ease-in-out p-2 rounded-sm"
      onClick={handleToggle}
    >
      {isOpen ? (
        <Sun className="h-4 w-4 hover:cursor-pointer" />
      ) : (
        <Moon className="h-4 w-4 hover:cursor-pointer" />
      )}
    </div>
  );
}
