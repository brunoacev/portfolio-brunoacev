import { PostsContent } from "@/components/posts";
import { Posts } from "@/database/posts-content-database";

export default function BlogPage() {
  return (
    <main className="h-full w-full p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore os ultimos updates
        </h1>
        <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
          Estou ansioso para compartilhar insights e informações fascinantes
          sobre o vasto mundo da tecnologia neste espaço dedicado ao blog.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Posts.map((item, idx) => (
          <PostsContent data={item} key={idx} />
        ))}
      </section>
    </main>
  );
}
