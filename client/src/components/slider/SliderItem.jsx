import { CarouselItem } from "keep-react";
import React from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ slide }) => {
  return (
    <CarouselItem className="bg-[#f3f6fb] py-6">
      <div className="container flex flex-col md:flex-row items-center">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">{slide.text}</h2>
          <p className="text-gray-secondary my-3">{slide.subText}</p>
          <Link to="/shops">
            <button className="bg-blue text-white py-3 px-6 rounded-lg font-medium">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="w-full h-full">
          <img className="w-100 bg-no-repeat " src={slide.image} alt="" />
        </div>
      </div>
    </CarouselItem>
  );
};

export default SliderItem;
/* 
className={`${slide.image} h-[70vh] bg-right bg-no-repeat bg-cover`}
*/
