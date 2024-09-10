import { GoAlert } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Rating from "../../ui/Rating";
import { Button } from "keep-react";
import { Link } from "react-router-dom";
const ProductDetail = ({ product }) => {
  const {
    brand,
    name,
    image,
    rating,
    countInStock,
    category,
    price,
    description,
  } = product || {};
  return (
    <>
      <Link to={"/shops"}>
        <Button className="bg-gray-primary">
          <FaAngleDoubleLeft className="me-1" /> Back Shop
        </Button>
      </Link>
      <div className="flex flex-wrap">
        <img
          alt={name}
          className="lg:w-1/2 w-full h-[500px] object-cover object-center rounded"
          src={image}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest font-medium text-blue">
            {brand}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {name}
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <Rating value={rating} />
              <span className="text-gray-600 ml-3">0 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-light space-x-2s cursor-pointer">
              <FaHeart className="text-gray-primary" size={20} />
            </span>
          </div>
          <div className=" flex flex-col gap-2 mt-6 pb-5 border-b-[1px] border-gray-light mb-5">
            <span className="font-bold inline-flex text-success-700">
              InStock
            </span>
            <p className="mr-3 font-medium">
              Category : <span className="font-normal">{category}</span>
            </p>
            <div className="flex items-center mb-5">
              <span className="mr-3 font-medium">Quantity :</span>
              {countInStock !== 0 && (
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-light py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              )}
            </div>
            <div className="bg-primary-50 flex gap-2 items-center p-2 rounded-lg">
              <GoAlert size={26} />
              <div className="text-gray-primary">
                <p>
                  <span className="font-medium">Need help?</span> Call Us +001
                  234 56 789
                </p>
                <p>Monday - Friday 09:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="title-font font-bold text-2xl text-gray-900">
              ${price}
            </span>
            <button className="flex ml-auto text-white bg-blue duration-300 hover:bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <hr className="mb-4 text-gray-light" />
        <p className="leading-relaxed text-gray-primary">{description}</p>
      </div>
    </>
  );
};

export default ProductDetail;
