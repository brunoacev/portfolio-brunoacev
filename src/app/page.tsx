import { AboutMe } from "@/components/about-me";
import { Journey } from "@/components/journey";
import { PersonalJourney } from "@/components/personal-journey";
import { TimeContextProvider } from "@/context/time-card-context";

export default function Home() {
  return (
    <div className="h-full w-full">
      <AboutMe />
      <Journey />
    </div>
  );
}
