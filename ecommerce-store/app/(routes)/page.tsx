import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard("f12187da-78d8-4f30-8e16-f29a1ed7f877");

  return (
    <Container>
      <div className="space-y-4 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-6 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
