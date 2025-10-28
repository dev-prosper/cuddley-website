import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import AddToCart from "@/components/shared/addto-cart";
import PageHeader from "@/components/shared/page-header";
import ProductImages from "@/components/shared/ProductImage";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await wixClientServer since it's async
  const wixClient = await wixClientServer();

  const { slug } = await params;
  console.log("Looking for product with slug:", slug);

  let product;
  // 🔹 Fetch product by slug
  try {
    const productQuery = await wixClient.products
      .queryProducts()
      .eq("slug", slug)
      .find();

    product = productQuery.items[0];
  } catch (error) {
    console.error("Error fetching product by slug:", error);
  }

  if (!product) {
    const allProducts = await wixClient.products.queryProducts().find();
    product = allProducts.items.find((p) => p.slug === slug);
  }

  if (!product) {
    return (
      <div className="text-center text-white py-10 h-screen flex justify-center items-center">
        <p>Product not found or unavailable.</p>
      </div>
    );
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
          {product.description ? (
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="text-white px-4 py-6 leading-6"
            />
          ) : (
            <p>This product currently has no description.</p>
          )}
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
