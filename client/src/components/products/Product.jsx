import React from "react";

const Product = ({ product }) => {
  const { name, image, category, price } = product || {};
  return (
    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-4 w-full -z-10 gap-4">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt={name}
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">${price}</p>
      </div>
    </div>
  );
};

export default Product;
