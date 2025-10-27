import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import AddToCart from "@/components/shared/addto-cart";
import PageHeader from "@/components/shared/page-header";
import ProductImages from "@/components/shared/ProductImage";

export default async function ProductPage({
  params,
}: {
  params: { category: string; productSlug: string };
}) {
  // ✅ Await wixClientServer since it's async
  const wixClient = await wixClientServer();

  const { category, productSlug } = params;

  // 🔹 Fetch product by slug
  const productQuery = await wixClient.products
    .queryProducts()
    .eq("slug", productSlug)
    .find();

  const product = productQuery.items[0];

  if (!product) {
    return (
      <div className="text-center text-white py-10">
        Product not found or unavailable.
      </div>
    );
  }

  // 🔹 Fetch the category name (optional)
  let collectionName = category;
  try {
    const { collection } =
      await wixClient.collections.getCollectionBySlug(category);
    if (collection?.name) collectionName = collection.name;
  } catch (err) {
    console.warn("⚠️ Failed to fetch collection name:", err);
  }

  return (
    <div>
      {/* Header */}
      <header className="w-full flex flex-row justify-between pt-4 pl-4 pr-4 items-center">
        <PageHeader />
      </header>

      {/* Main Content */}
      <main>
        {/* Product Images */}
        <section>
          <ProductImages items={product.media?.items || []} />
        </section>

        {/* Product Details */}
        <section>
          <p className="w-full pt-5 pl-4 font-inter text-white font-bold text-[22px]">
            {product.name}
          </p>
          <p className="w-full pt-1 pl-4 font-inter text-[14px] text-[#9EA3B8]">
            ₦{product.priceData?.price?.toLocaleString() || "—"}
          </p>
          <p className="pt-1 pl-4 w-full font-inter text-[16px] text-white leading-relaxed">
            {product.description ||
              "This product currently has no description."}
          </p>
        </section>

        {/* Add to Cart */}
        <section>
          <AddToCart
            productId={product._id!}
            productName={product.name ?? undefined}
            price={product.priceData?.price ?? undefined}
            imageUrl={product.media?.mainMedia?.image?.url || ""}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={
              typeof product.stock?.quantity === "number"
                ? product.stock.quantity
                : 99
            }
          />
        </section>

        {/* Shipping Info */}
        <section>
          <p className="pt-4 pl-4 text-white font-semibold font-inter text-[18px]">
            Shipping Information
          </p>
          <p className="pt-1 pl-4 text-white text-[16px] font-inter">
            Ships within 5-7 business days. Free shipping on orders over
            ₦700,000. Returns accepted within 30 days of delivery.
          </p>
        </section>
      </main>
    </div>
  );
}
