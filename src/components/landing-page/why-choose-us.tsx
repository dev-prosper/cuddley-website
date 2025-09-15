import SectionHeading from "../shared/section-heading";
import { REASONS_TO_CHOOSE } from "@/constants";
import ChoiceCards from "./choice-cards";

export default function WhyChooseUs() {
  return (
    <section className="p-4 space-y-12">
      <SectionHeading
        heading="Why Choose US?"
        subHeading="We are committed to providing exceptional quality, service, and value to our customers."
      />

      <div className="grid grid-cols-2 gap-3">
        {REASONS_TO_CHOOSE.map(({ heading, description, icon }, index) => {
          const Icon = icon;
          return (
            <ChoiceCards
              key={index}
              heading={heading}
              description={description}
              icon={<Icon className="size-6" />}
            />
          );
        })}
      </div>
    </section>
  );
}
