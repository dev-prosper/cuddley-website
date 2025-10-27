"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImage = {
  _id?: string;
  image?: {
    url?: string;
  } | null;
};

interface ProductImagesProps {
  items: ProductImage[];
}

const ProductImages = ({ items }: ProductImagesProps) => {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url || "/placeholder.jpg"}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-row gap-4 mt-8">
        {items.map((item: ProductImage, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url || "/placeholder.jpg"}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
