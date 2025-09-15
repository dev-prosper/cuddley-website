import { type ReactNode } from "react";

type ChoiceCardsProps = {
  icon: ReactNode;
  heading: string;
  description: string;
};

export default function ChoiceCards({
  icon,
  heading,
  description,
}: ChoiceCardsProps) {
  return (
    <div className="bg-[#1C1F26] border border-[#3D4254] rounded-xl p-6 text-white font-inter space-y-3">
      <div>{icon}</div>

      <div className="space-y-3">
        <h3 className="font-bold">{heading}</h3>
        <p className="text-[#9EA3B8] text-sm leading-5">{description}</p>
      </div>
    </div>
  );
}
