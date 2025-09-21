import type { ReactNode } from "react";
import Link from "next/link";

type ContactDetailsCardsProps = {
  icon: ReactNode;
  contactType: string;
  contactDetails: string;
  url: string;
};

export default function ContactDetailsCards({
  icon,
  contactType,
  contactDetails,
  url,
}: ContactDetailsCardsProps) {
  return (
    <div className="flex gap-4">
      <div className="bg-[#0C111E] rounded-xl size-12 flex items-center justify-center">
        <div>{icon}</div>
      </div>
      <div className="">
        <h3 className="text-white font-medium text-[16px] font-inter">
          {contactType}
        </h3>
        <Link href={url} className="text-sm font-roboto text-[#00C2FF]">
          {contactDetails}
        </Link>
      </div>
    </div>
  );
}
