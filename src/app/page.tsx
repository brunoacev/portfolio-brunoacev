import { AboutMe } from "@/components/about-me";
import { PersonalJourney } from "@/components/personal-journey";

export default function Home() {
  return (
    <div className="h-full w-full">
      <AboutMe />
      <PersonalJourney />
    </div>
  );
}
