import { Section } from "@/components/section-wrapper";
import { journeyContentData } from "@/database/journey-content-database";
import { Card } from "../card";

function Cards() {
  return (
    <Section.Box className="flex items-start gap-4 flex-wrap flex-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {journeyContentData.map((content) => (
         <Card key={content.id} type="JourneyCard" {...content} />        
      ))}
    </Section.Box>
  );
}

export { Cards };
