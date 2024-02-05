import { projectContentData } from "@/database/project-content-database";
import { Section } from "../section-wrapper";
import { Card } from "../card";

function Projects() {
  return (
    <Section.Wrapper>
      <Section.Header>Projetos</Section.Header>

      <Section.Content className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projectContentData.map((content) => (
          <Card key={content.id} type="ProjectCard" {...content} />
        ))}
      </Section.Content>
    </Section.Wrapper>
  );
}

export { Projects };
