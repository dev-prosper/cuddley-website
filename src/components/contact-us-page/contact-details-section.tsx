import { CONTACT_DETAILS } from "@/constants";
import ContactDetailsCards from "./contact-details-cards";

export default function ContactDetailsSection() {
  return (
    <section className="px-4 py-5 space-y-5">
      <h2 className="text-white text-xl font-inter font-bold">Get in Touch</h2>

      <div className="space-y-5">
        {CONTACT_DETAILS.map((details, index) => {
          const Icon = details.icon;
          return (
            <ContactDetailsCards
              key={index}
              icon={<Icon className="size-6" />}
              contactType={details.contactType}
              contactDetails={details.contactDetails}
              url={details.url}
            />
          );
        })}
      </div>
    </section>
  );
}
