import { Section } from "../section-wrapper";
import { Form } from "./form";

import { Description } from "./description";
import { FormWrapper } from "./wrapper";

function Contact() {
  return (
    <Section.Wrapper>
      <Section.Header>Contato</Section.Header>

      <Section.Content className="m-auto">
        <FormWrapper>
          <Description />
          <Form />
        </FormWrapper>
      </Section.Content>
    </Section.Wrapper>
  );
}

export { Contact };
