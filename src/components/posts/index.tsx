import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  description: string;
  image: string;
  userImage: string;
  name: string;
  year: string;
  tags: string[];
  url: string;
};

function Post({ data }: { data: Post }) {
  return (
    <Link
      href={data.url}
      className="border rounded-md p-4 w-fit flex flex-col gap-4 hover:cursor-pointer bg-white dark:bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700/30 transition-all duration-300 ease-in-out md:max-w-md"
    >
      <Image
        alt="Imagem alternativa sobre o conteudo"
        src={data.image}
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p className="text-sm tracking-wide text-zinc-500 font-semibold">
          {data.description}
        </p>

        <div className="flex gap-2 items-center">
          <Image
            alt="Imagem do usuário no formato circular"
            src={data.userImage}
            width={25}
            height={25}
            className="rounded-full"
          />
          <span className="text-xs capitalize font-semibold">{data.name}</span>
          <span className="text-xs capitalize font-light">{data.year}</span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          {data.tags.map((item, idx) => (
            <span
              key={idx}
              className="py-2 px-4 text-xs font-semibold tracking-wide bg-blue-500/20 text-zinc-900 dark:text-zinc-50 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
export { Post };
