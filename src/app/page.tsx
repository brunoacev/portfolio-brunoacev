import { AboutMe } from "@/components/about-me";
import { Contact } from "@/components/contact";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="h-full w-full">
      <AboutMe />
      <Journey />
      <Projects />
      <Contact />
    </div>
  );
}
