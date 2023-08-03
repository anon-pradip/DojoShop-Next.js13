import prismadb from "@/lib/prismadb";
import React from "react";
import ProductForm from "./components/product-form";
import { ProductColumn } from "../components/columns";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
  });

  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} />
      </div>
    </>
  );
};

export default ProductPage;
