import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard("72203e9d-1a4e-4e58-af52-c710b37809c4");

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
