import React from "react";

const ProductLoader = () => {
  return (
    <div className="flex flex-col rounded shadow-md animate-puls p-4">
      <div className="rounded-t h-48 bg-gray-light"></div>
      <div className="flex-1 space-y-4 mt-2">
        <div className="w-full h-6 rounded bg-gray-light"></div>
        <div className="w-full h-6 rounded bg-gray-light"></div>
        <div className="w-3/4 h-6 rounded bg-gray-light"></div>
      </div>
    </div>
  );
};

export default ProductLoader;
