import Image from "next/image";

type ProductCardProps = {
  imgSrc: string;
  productName: string;
  price: string;
};

export default function ProductCard({
  imgSrc,
  productName,
  price,
}: ProductCardProps) {
  return (
    <div className="h-75 min-w-45 w-full px-4 text-white space-y-3">
      <div className="relative h-60 w-full">
        <Image
          src={imgSrc}
          alt="Dining Room Set-up"
          fill
          className="object-cover rounded-xl h-full"
        />
      </div>

      <div>
        <h3 className="font-medium leading-6">{productName}</h3>
        <p className="text-sm text-[#9EA3B8]">₦{price}</p>
      </div>
    </div>
  );
}
