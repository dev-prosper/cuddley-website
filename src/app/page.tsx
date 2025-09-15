import FeaturedProducts from "@/components/landing-page/featured-products";
import Hero from "@/components/landing-page/hero";
import WhyChooseUs from "@/components/landing-page/why-choose-us";

export default function Home() {
  return (
    <div className="space-y-14 font-noto-serif">
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
}
