"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { getPost } from "@/lib/posts";
import { NotFound } from "@/components/not-found";

export default function DynamicBlog() {
  const slug = usePathname().split("/").pop() || "not-found";
  const post = getPost({ slug });

  if (!post) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <main className="w-full min-h-full p-4 flex flex-col gap-6">
        <Link
          href={"/blog"}
          className="flex items-center gap-2 w-fit px-2 py-2 border rounded-md dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-300 ease-in-out"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Voltar</span>
        </Link>

        <div className="flex flex-col md:flex-row gap-4 w-full ">
          <div className="px-4 w-full flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-xl tracking-wide capitalize">
                {post?.title}
              </h1>
              <div
                className={cn("grid grid-cols-1 gap-4", {
                  ["grid-rows-1"]: post?.content.length === 1,
                  ["grid-rows-2"]: post?.content.length === 2,
                  ["grid-rows-3"]: post?.content.length === 3,
                  ["grid-rows-4"]: post?.content.length === 4,
                  ["grid-rows-5"]: post?.content.length === 5,
                })}
              >
                {post?.content.map((item, idx) => (
                  <div key={idx} className="w-full flex gap-6">
                    <div className="w-full flex flex-col gap-4">
                      <h3 className="text-md font-semibold ">
                        {item?.subTitle}
                      </h3>
                      <p className="text-sm tracking-wide leading-6 dark:text-zinc-300">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span>Referências</span>

              <div className="flex flex-col gap-2">
                {post?.refs.map((item, idx) => (
                  <Link
                    href={item.url}
                    key={idx}
                    className="flex items-center gap-2 hover:cursor-pointer text-sm transition-all duration-300 ease-in-out"
                  >
                    <span>Link: </span>
                    <span className="hover:underline text-blue-900 dark:text-blue-600 font-semibold">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
