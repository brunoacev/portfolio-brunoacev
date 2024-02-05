import { Post } from "@/components/post";
import { PostsData } from "@/database/posts-content-database";

export default function BlogPage() {
  return (
    <main className="h-full w-full p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-6xl font-bold">
          Explore os ultimos updates
        </h1>
        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
          Mal posso esperar para compartilhar com você, estimado leitor, uma
          profusão de insights instigantes e informações fascinantes sobre o
          vasto e dinâmico universo da tecnologia. Este espaço dedicado ao blog
          servirá como um canal exclusivo para explorarmos juntos as tendências
          mais recentes, inovações emocionantes e perspectivas esclarecedoras
          que moldam o cenário tecnológico atual.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PostsData.map((item, idx) => (
          <Post data={item} key={idx} />
        ))}
      </section>
    </main>
  );
}
