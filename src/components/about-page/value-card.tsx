import type { ReactNode } from "react";

type ValueCardProps = {
  icon: ReactNode;
  value: string;
};
export default function ValueCard({ icon, value }: ValueCardProps) {
  return (
    <div className="rounded-xl bg-[#0C111E] border flex p-4 gap-3 items-center">
      <div>{icon} </div>
      <p className="text-white text-base font-bold font-inter">{value}</p>
    </div>
  );
}
