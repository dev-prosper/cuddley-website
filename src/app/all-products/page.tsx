import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
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

const PRODUCT_PER_PAGE = 10;

export default async function ShopPage({
  searchParams,
}: {
  params: { category: string };
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const wixClient = await wixClientServer();

  // 🔹 Query ALL products (no category filter)
  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", resolvedSearchParams?.name || "")
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

  if (!res.items.length) {
    return (
      <div className="text-center text-white py-10">No products found.</div>
    );
  }

  // ✅ Render products
  return (
    <div>
      <div className="pt-4 px-4 flex flex-row items-center">
        <PageHeader pageName={"All Products"} />
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-2 gap-4 px-4 pt-6">
        {res.items.map((product: products.Product) => (
          <Link
            key={product._id}
            href={`/all-products/${product.slug}`}
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

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 py-6 text-white">
        {(() => {
          const currentPage = resolvedSearchParams?.page
            ? parseInt(resolvedSearchParams.page)
            : 0;
          const totalPages = Math.ceil(
            (res.totalCount ?? 0) / PRODUCT_PER_PAGE,
          );

          if (totalPages <= 1) return null; // no pagination needed

          // Create array of page numbers
          const pages = Array.from({ length: totalPages }, (_, i) => i);

          return (
            <div className="flex items-center gap-2">
              {/* Prev Button */}
              {currentPage > 0 && (
                <Link
                  href={{
                    pathname: `/all-products`,
                    query: {
                      ...resolvedSearchParams,
                      page: String(currentPage - 1),
                    },
                  }}
                  className="text-[#1CC8F8] text-sm"
                >
                  Prev
                </Link>
              )}

              {/* Page Numbers */}
              {pages.map((pageNum) => (
                <Link
                  key={pageNum}
                  href={{
                    pathname: `/all-products`,
                    query: { ...resolvedSearchParams, page: String(pageNum) },
                  }}
                  className={`px-3 text-sm py-1 rounded ${
                    pageNum === currentPage
                      ? "bg-white text-black font-semibold"
                      : ""
                  }`}
                >
                  {pageNum + 1}
                </Link>
              ))}

              {/* Next Button */}
              {currentPage < totalPages - 1 && (
                <Link
                  href={{
                    pathname: `/all-products`,
                    query: {
                      ...resolvedSearchParams,
                      page: String(currentPage + 1),
                    },
                  }}
                  className="text-[#1CC8F8] text-sm"
                >
                  Next
                </Link>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
