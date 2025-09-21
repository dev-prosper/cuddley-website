import PageHeader from "@/components/shared/page-header";
import MissionStorySection from "@/components/about-page/mission-story-section";
import ValueSection from "./value-section";

export default function page() {
  return (
    <div>
      <PageHeader pageName="About Us" />

      <MissionStorySection
        imgUrl="/images/Showroom.png"
        altText="Cuddley Showroom"
        heading="Our Story"
        longText="Cuddleys Interiors was founded in 2018 by Adaeze Onwuka, a
            passionate interior designer with a vision to create beautiful,
            functional spaces that reflect the unique personalities of her
            clients. What started as a small, home-based business has grown into
            a thriving design studio, known for its attention to detail,
            personalized service, and commitment to quality."
      />

      <MissionStorySection
        imgUrl="/images/Cuddley-store.png"
        altText="Cuddley Stores"
        heading="Our Mission"
        longText="At Cuddleys Interiors, our mission is to transform houses into
            homes. We believe that your living space should be a sanctuary, a
            place where you feel comfortable, inspired, and truly yourself. We
            strive to create designs that are not only aesthetically pleasing
            but also functional and tailored to your lifestyle."
      />

      <ValueSection />
    </div>
  );
}
