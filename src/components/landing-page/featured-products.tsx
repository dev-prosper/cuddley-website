import Link from "next/link";
import ProductCard from "../shared/product-card";
import SectionHeading from "../shared/section-heading";
import { wixClientServer } from "@/lib/wixClientServer";

export default async function FeaturedProducts() {
  const wixClient = await wixClientServer();

  // Fetch the "Featured Collection" category from Wix
  const collectionRes = await wixClient.collections
    .queryCollections()
    .eq("name", "Featured Collection")
    .find();

  const featuredCollection = collectionRes.items[0];

  // Fetch products belonging to that collection
  let featuredProducts: any[] = [];
  if (featuredCollection) {
    const productsRes = await wixClient.products
      .queryProducts()
      .eq("collectionIds", featuredCollection._id)
      .limit(8)
      .find();

    featuredProducts = productsRes.items;
  }

  return (
    <section className="w-full max-w-150 space-y-10">
      <SectionHeading
        heading="Featured Collection"
        subHeading="Explore our curated collections, each designed to bring a unique aesthetic to your home."
      />

      <div className="w-full grid grid-cols-2 gap-y-4 gap-x-3 space-x-5">
        {featuredProducts.length > 0 ? (
          featuredProducts.map((product) => (
            <Link
              key={product._id}
              href={`/shop/${featuredCollection?.slug}/${product.slug}`}
              className="block"
            >
              <ProductCard
                imgSrc={product.media?.mainMedia?.image?.url}
                price={product.priceData?.formatted?.price}
                productName={product.name}
                productAlt={product.name}
              />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No featured products found.
          </p>
        )}
      </div>
    </section>
  );
}
