import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";
import { formatNumberWithCommas } from "@/helpers";
import ProductCard from "@/components/shared/product-card";

interface SearchParams {
  name?: string;
  type?: string;
  min?: number;
  max?: number;
  page?: string;
  sort?: string;
}

type SortableProductFields =
  | "name"
  | "priceData.price"
  | "_id"
  | "slug"
  | "sku"
  | "productType"
  | "price"
  | "numericId"
  | "lastUpdated";

const PRODUCT_PER_PAGE = 8;

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: Promise<SearchParams>;
}) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([
    params,
    searchParams,
  ]);

  const wixClient = await wixClientServer();

  // 🔹 Get the slug from the URL (e.g. "sofa-set")
  const categorySlug = resolvedParams.category;

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
    .startsWith("name", resolvedSearchParams?.name || "")
    .hasSome("collectionIds", [collection._id]) // ✅ correct filter
    .hasSome(
      "productType",
      resolvedSearchParams?.type
        ? [resolvedSearchParams.type]
        : ["physical", "digital"],
    )
    .gt("priceData.price", resolvedSearchParams?.min || 0)
    .lt("priceData.price", resolvedSearchParams?.max || 999999)
    .limit(PRODUCT_PER_PAGE)
    .skip(
      resolvedSearchParams?.page
        ? parseInt(resolvedSearchParams.page) * PRODUCT_PER_PAGE
        : 0,
    );

  if (resolvedSearchParams?.sort) {
    const [sortType, sortByRaw] = resolvedSearchParams.sort.split(" ");
    const sortBy = sortByRaw as SortableProductFields;
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
        <PageHeader pageName={collection?.name} />
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-2 gap-4 py-4 px-4">
        {res.items.map((product: products.Product) => (
          <Link
            key={product._id}
            href={`/shop/${categorySlug}/${product.slug}`}
            className="space-y-3 flex flex-col"
          >
            <ProductCard
              imgSrc={product.media?.mainMedia?.image?.url || "/product.png"}
              productName={product.name || "Unnamed Product"}
              productAlt={product.name || "Product"}
              price={formatNumberWithCommas(product.priceData?.price)}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
