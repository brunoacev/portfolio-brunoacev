"use client";

import { Button } from "../ui/button";

function FormButton() {
  return (
    <Button
      type="submit"
      className="bg-zinc-200 w-fit text-zinc-800 font-semibold hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-800 transition-all duration-300 ease-in-out dark:text-zinc-50"
    >
      Enviar
    </Button>
  );
}
export { FormButton };
