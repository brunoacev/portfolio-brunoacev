import { PostsData } from "@/database/posts-content-database";

function getPost({ slug }: { slug: string }) {
  return PostsData.find((item) => item.slugUrl.split("/").pop() === slug);
}

export { getPost };
