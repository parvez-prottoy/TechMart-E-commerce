import { useGetProductsQuery } from "../../features/product/productSlice";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  // note: decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>{error}</p>;
  if (!isLoading && !isError && products.length === 0)
    content = <p>Products not found</p>;
  if (!isLoading && !isError && products.length > 0)
    content = products.map((product) => (
      <Product key={product._id} product={product} />
    ));

  return <>{content}</>;
};

export default Products;
