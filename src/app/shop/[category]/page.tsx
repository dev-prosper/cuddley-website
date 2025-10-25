import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import { BackMenu } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";

const PRODUCT_PER_PAGE = 8;

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: any;
}) {
  const wixClient = await wixClientServer();

  // 🔹 Get the slug from the URL (e.g. "sofa-set")
  const categorySlug = params.category;

  // 🔹 Fetch the category details by slug
  const allCollections = await wixClient.collections.queryCollections().find();
  const collection = allCollections.items.find((c) => c.slug === categorySlug);

  // 🔸 Handle missing category
  if (!collection) {
    return (
      <div className="text-center text-white py-10">
        Category not found or unavailable.
      </div>
    );
  }

  // 🔹 Now query products that belong to this category
  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .hasSome("collectionIds", [collection._id]) // ✅ correct filter
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page ? parseInt(searchParams.page) * PRODUCT_PER_PAGE : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") productQuery.ascending(sortBy);
    if (sortType === "desc") productQuery.descending(sortBy);
  }

  const res = await productQuery.find();

  // 🔹 If no products found
  if (!res.items.length) {
    return (
      <div className="text-center text-white py-10">
        No products found in {collection.name}.
      </div>
    );
  }

  // ✅ Render products
  return (
    <div>
      <div className="pt-4 px-4 flex flex-row items-center">
        {/* Back button
        <Link href="/shop">
          <BackMenu className="size-5 text-white" />
        </Link>

        Dynamic category name
        <p className="text-center w-full text-[16px] font-inter font-bold text-white">
          {collection.name}
        </p> */}

        <PageHeader pageName={collection?.name}/>
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-2 gap-4 py-4 px-4">
        {res.items.map((product: products.Product) => (
          <Link
            key={product._id}
            href={`/shop/${categorySlug}/${product.slug}`}
            className="space-y-3 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt={product.name || "Product"}
                fill
                className="object-cover rounded-[8px]"
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-[16px] font-medium font-noto-serif text-white">
                {product.name}
              </p>
              <p className="font-roboto text-[14px] text-[#9EA3B8]">
                ₦{product.priceData?.price}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
