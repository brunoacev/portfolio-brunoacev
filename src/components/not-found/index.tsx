import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

function NotFound() {
  return (
    <main className="w-full h-full p-4 flex flex-col gap-10">
      <Link
        href={"/blog"}
        className="flex items-center gap-2 w-fit px-2 py-2 border rounded-md dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-300 ease-in-out"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Voltar</span>
      </Link>
      <p className="mt-10 tracking-wide">
        Lamentamos informar que a página que você procura não foi encontrada.
        Não se preocupe, estamos aqui para ajudar! Por favor, verifique a URL e
        certifique-se de que digitou corretamente. Se você acredita que chegou
        aqui por engano, pode ser útil voltar à página inicial.
      </p>

      <Image
        alt="Nave espacial com dois pequenos personagens, um sendo abduzido representando uma pagina não encotnrada."
        src={"/svgs/not-found.svg"}
        width={300}
        height={300}
        className="m-auto"
      />
    </main>
  );
}

export { NotFound };
