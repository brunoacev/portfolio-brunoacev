import { Section } from "@/components/section-wrapper";
import { journeyContentData } from "@/database/journey-content-database";

function Cards() {
  return (
    <Section.Box className="flex items-start gap-4 flex-wrap flex-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {journeyContentData.map((content) => (
        <Section.Card content={content} key={content.id} />
      ))}
    </Section.Box>
  );
}

export { Cards };
