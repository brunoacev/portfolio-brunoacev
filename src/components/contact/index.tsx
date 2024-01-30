import { Section } from "../section-wrapper";
import { ContactForm } from "./form";

import { FormDescription } from "./description";
import { FormWrapper } from "./wrapper";

function Contact() {
  return (
    <Section.Wrapper>
      <Section.Header>Contato</Section.Header>

      <Section.Content className="m-auto">
        <FormWrapper>
          <FormDescription />
          <ContactForm />
        </FormWrapper>
      </Section.Content>
    </Section.Wrapper>
  );
}

export { Contact };
