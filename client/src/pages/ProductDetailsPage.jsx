import React from "react";
import ProductDetail from "../components/products/ProductDetail";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/product/productSlice";
import ProductDetailsLoader from "../ui/loaders/ProductDetailsLoader";

const ProductDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const { data: product, isLoading, isError, error } = useGetProductQuery(id);
  // note: decide what to render
  let content = null;
  if (isLoading) content = <ProductDetailsLoader />;
  if (!isLoading && isError) content = <p>{error}</p>;
  if (!isLoading && !isError && product._id)
    content = <ProductDetail product={product} />;
  return (
    <section className="overflow-hidden">
      <div className="container py-10">{content}</div>
    </section>
  );
};

export default ProductDetailsPage;
