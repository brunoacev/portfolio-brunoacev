import { AboutMe } from "@/components/about-me";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <AboutMe />
      <Journey />
      <Projects />
    </main>
  );
}
