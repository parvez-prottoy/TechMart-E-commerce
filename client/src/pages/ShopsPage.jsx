import React from "react";
import Products from "../components/products/Products";
import FilterProducts from "../components/products/filter/FilterProducts";

const ShopsPage = () => {
  return (
    <>
      <section className="">
        <div className="container py-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Shops<span className="text-orange">.</span>
            </h2>
            <hr className="text-gray-light mb-4" />
          </div>
          <div className="flex justify-between mb-4 z-20">
            <FilterProducts />
          </div>
          <hr className="text-gray-light mb-4" />
          <div className="flex flex-wrap -m-4 -z-10">
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopsPage;
