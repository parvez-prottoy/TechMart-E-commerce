import React from "react";
import Rating from "../../ui/Rating";

const Product = ({ product }) => {
  const { name, image, category, price, rating } = product || {};
  return (
    <div className="p-4 border border-gray-light rounded-lg duration-300 hover:scale-[1.03] cursor-pointer">
      <a className="block relative h-48 rounded-lg -z-10">
        <img
          alt={name}
          className=" object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font font-medium bg-blue inline text-white p-2 rounded-md">
          {category}
        </h3>
        <h2
          className="h-8 overflow-hidden text-ellipsis text-nowrap  text-gray-900 title-font text-lg font-medium mt-2"
          title={name}
        >
          {name}
        </h2>
        <div>
          <Rating value={rating} />
        </div>
        <h4 className="mt-1 font-bold text-xl">
          {" "}
          <span className="text-orange">$</span> {price}
        </h4>
      </div>
    </div>
  );
};

export default Product;
