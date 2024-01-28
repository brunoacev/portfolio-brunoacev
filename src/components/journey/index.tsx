import { Section } from "../section-wrapper";
import { Notation } from "./notation";
import { BarProgress } from "./bar-progress";
import { Cards } from "./cards";

function Journey() {
  return (
    <Section.Wrapper>
      <Section.Header>Trajeto</Section.Header>
      <Notation />
      <Section.Content className="flex h-full gap-4 md:flex-col">
        <Section.Box className="flex min-h-full gap-1 md:flex-col md:w-full">
          <BarProgress />
        </Section.Box>
        <Cards />
      </Section.Content>
    </Section.Wrapper>
  );
}

export { Journey };
