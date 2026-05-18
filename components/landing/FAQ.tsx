import { FAQS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <Section id="faq" className="bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about FreightBooks
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={FAQS} />
        </div>
      </Container>
    </Section>
  );
}
