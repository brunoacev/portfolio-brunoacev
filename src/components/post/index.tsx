import { PostType } from "@/database/posts-content-database";
import Image from "next/image";
import Link from "next/link";

function Post({ data }: { data: PostType }) {
  return (
    <Link
      href={data.slugUrl}
      className="border rounded-md p-4 w-fit h-full md:max-w-xs flex flex-col justify-start gap-4 hover:cursor-pointer bg-white dark:bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-700/30 transition-all duration-300 ease-in-out"
    >
      <Image
        alt="Imagem alternativa sobre o conteudo"
        src={data.image}
        width={250}
        height={250}
      />
      <div className="flex flex-col gap-4 justify-between  h-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{data.title}</h1>
          <p className="text-xs tracking-wide text-zinc-500 font-semibold">
            {data.subTitle}
          </p>

          <div className="flex gap-2 items-center">
            <Image
              alt="Imagem do usuário no formato circular"
              src={data.user.avatar}
              width={25}
              height={25}
              className="rounded-full"
            />
            <span className="text-xs capitalize font-semibold">
              {data.user.name}
            </span>
            <span className="text-xs capitalize font-light">
              {data.user.year}
            </span>
          </div>
        </div>
        <div className="flex items-end flex-wrap gap-2 h-full">
          {data.user.tags.map((item, idx) => (
            <span
              key={idx}
              className="py-1 px-2 text-[10px] font-semibold tracking-wide bg-blue-500/20 text-zinc-900 dark:text-zinc-50 rounded-full"
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
