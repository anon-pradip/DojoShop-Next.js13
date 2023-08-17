"use client";

import { Product } from "@/types";

import Image from "next/image";
import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute px-6 w-full bottom-5">
          <div className="flex gap-6 justify-center">
            <div onClick={onPreview}>
              <IconButton
                icon={<Expand size={20} className="text-gray-600" />}
              />
            </div>
            <div onClick={onAddToCart} className="">
              <IconButton
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="">
        <p className="text-lg font-semibold">{data.name}</p>
        <p className=" text-sm text-gray-500">{data.category?.name}</p>
      </div>

      {/* Price */}
      <div className="flex justify-between items-center">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
