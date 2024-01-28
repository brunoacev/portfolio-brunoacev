import { AboutMe } from "@/components/about-me";
import { Journey } from "@/components/journey";

export default function Home() {
  return (
    <div className="h-full w-full">
      <AboutMe />
      <Journey />
    </div>
  );
}
