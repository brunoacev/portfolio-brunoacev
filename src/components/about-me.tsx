import Image from "next/image";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center w-full gap-10 text-xs sm:text-sm tracking-wide md:flex-row">
        <div className="h-fit p-4">
          <Image
            alt="Foto pessoal de perfil"
            src={"/perfil.jpg"}
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2 max-w-md">
          <h1 className="text-base">Olá, me chamo Bruno Azevedo.</h1>
          <p>
            Desenvolvedor entusiamado em criar soluções utilizando tecnologias e
            seus ecossistemas como Rust, Javascript e Python!
          </p>
          <span className="border-b py-1">
            Nesse portfolio você vai entender mais sobre:
          </span>
          <ul className="flex flex-col gap-2 ">
            <li>Trajeto pessoal, educacional e profissional.</li>
            <li>
              Ideias e opiniões acessando meu{" "}
              <Link href={"/blog"} className="hover:underline">
                blog pessoal.
              </Link>
            </li>
            <li>Projetos pessoais e participações.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
