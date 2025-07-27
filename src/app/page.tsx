import { AboutMe } from "@/components/about-me";
import { Footer } from "@/components/footer";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <AboutMe />
      <Journey />
      <Projects />
      {/* <Footer /> */}
    </main>
  );
}
