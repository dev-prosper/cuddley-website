import Image from "next/image";

type MissionStorySectionProps = {
  imgUrl: string;
  altText: string;
  heading: string;
  longText: string;
};
export default function MissionStorySection({
  imgUrl,
  altText,
  heading,
  longText,
}: MissionStorySectionProps) {
  return (
    <section>
      <div className="w-full h-56 relative">
        <Image src={imgUrl} alt={altText} fill className="object-cover" />
      </div>

      <div className="space-y-3 px-4 py-5">
        <h2 className="font-bold font-inter text-2xl text-white">{heading}</h2>

        <p className="font-inter text-sm text-white leading-6">{longText}</p>
      </div>
    </section>
  );
}
