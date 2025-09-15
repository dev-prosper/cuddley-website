type SectionHeadingProps = {
  heading: string;
  subHeading: string;
};

export default function SectionHeading({
  heading,
  subHeading,
}: SectionHeadingProps) {
  return (
    <div className="gap-2 font-noto-serif flex flex-col justify-center items-center">
      <h2 className="text-[32px] font-bold text-white text-center leading-10">
        {heading}
      </h2>
      <p className="text-center sm:w-3/5 w-4/5 text-sm text-white leading-6">
        {subHeading}
      </p>
    </div>
  );
}
