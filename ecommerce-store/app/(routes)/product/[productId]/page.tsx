import React from "react";

import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  console.log("images: ", product.images);
  return (
    <div className=" bg-white">
      <Container>
        <div className="px-2 py-6 sm:px-4 lg:px-5">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <Info data={product} />
            </div>
          </div>
          <hr className=" my-10" />
          <ProductList title="Related Products" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
