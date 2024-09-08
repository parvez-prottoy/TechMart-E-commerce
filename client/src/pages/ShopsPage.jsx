import React from "react";
import Products from "../components/products/Products";
import FilterProducts from "../components/products/filter/FilterProducts";

const ShopsPage = () => {
  return (
    <>
      <section className="">
        <div className="container py-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Shops.</h2>
          </div>
          <div className="flex justify-between mb-4 z-20">
            <FilterProducts />
          </div>
          <div className="flex flex-wrap -m-4 -z-10">
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopsPage;
