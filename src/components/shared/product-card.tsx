import Image from "next/image";

type ProductCardProps = {
  imgSrc: string;
  productName: string;
  price: string;
  productAlt: string;
};

export default function ProductCard({
  imgSrc,
  productName,
  price,
  productAlt,
}: ProductCardProps) {
  return (
    <div className="h-75 min-w-45 w-full px-4 text-white space-y-3">
      <div className="relative h-60 w-full">
        <Image
          src={imgSrc}
          alt={productAlt || "Product Name"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover rounded-xl h-full"
          priority
        />
      </div>

      <div>
        <h3 className="font-medium leading-6">{productName}</h3>
        <p className="text-sm text-[#9EA3B8]">₦{price}</p>
      </div>
    </div>
  );
}
