import {
  WhatsAppIconColored,
  InstagramIconColored,
  TiktokIconColored,
} from "../icons";
import { ONLINE_HOURS } from "@/constants";

export default function CustomerSupportSection() {
  return (
    <section className="bg-[#0C111E] p-4">
      <div className="space-y-6">
        <h2 className=" font-inter font-medium text-sm text-white">
          Follow Us
        </h2>
        <article className="flex gap-7">
          <InstagramIconColored className="size-8" />

          <WhatsAppIconColored className="size-8" />

          <TiktokIconColored className="size-12" />
        </article>
      </div>

      {/* Customer Support Section */}
      <div className="space-y-2">
        <h3 className="font-bold font-inter text-sm text-white">
          Customer Support Hours
        </h3>

        <div className="space-y-1">
          {ONLINE_HOURS.map((time, index) => (
            <p
              className=" text-white font-inter font-bold text-[14px]"
              key={index}
            >
              {time.days}
              <span className="ml-1 text-sm font-normal">{time.time}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
