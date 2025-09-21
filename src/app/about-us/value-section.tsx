import React from "react";
import { VALUES } from "@/constants";
import ValueCard from "@/components/about-page/value-card";

export default function ValueSection() {
  return (
    <section className="px-4 py-5 space-y-4">
      <div className="space-y-3">
        <h2 className=" text-white font-bold text-2xl font-inter">Our Value</h2>

        <div className="flex gap-3 flex-wrap">
          {VALUES.map(({ value, icon }, index) => {
            const Icon = icon;
            return (
              <ValueCard
                key={index}
                value={value}
                icon={<Icon className="size-6 " />}
              />
            );
          })}
        </div>
      </div>

      <p className="text-white text-sm leading-6">
        We are committed to building strong relationships with our clients,
        understanding their needs and preferences, and working closely with them
        throughout the design process. We believe in open communication,
        transparency, and a collaborative approach to ensure that every project
        is a success. Our team of experienced designers and craftsmen are
        dedicated to delivering exceptional results, using high-quality
        materials and innovative techniques to create spaces that are both
        beautiful and enduring.
      </p>
    </section>
  );
}
