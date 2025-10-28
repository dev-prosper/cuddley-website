import ProductCard from "../shared/product-card";
import { FEATURED_PRODUCTS } from "@/constants";
import SectionHeading from "../shared/section-heading";

export default function FeaturedProducts() {
  return (
    <section className="w-full max-w-150 space-y-10">
      <SectionHeading
        heading="Featured Collections"
        subHeading="Explore our curated collections, each designed to bring a unique
        aesthetic to your home."
      />

      <div className="w-full grid grid-cols-2 gap-y-4 gap-x-3 space-x-5">
        {FEATURED_PRODUCTS.map(({ productName, price, imgSrc }, index) => {
          return (
            <ProductCard
              productAlt={productName}
              key={index}
              imgSrc={imgSrc}
              price={price}
              productName={productName}
            />
          );
        })}
      </div>
    </section>
  );
}
