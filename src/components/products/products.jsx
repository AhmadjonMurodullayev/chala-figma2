import React from "react";
import data from "../../data/data";

export default function Products() {
  return (
    <div className="max-w-[1200px] m-auto my-8 px-4">
      <h1 className="text-3xl text-center text-[#1A0B5B] font-bold mb-8">
        Latest Products
      </h1>

      <div className="flex justify-center gap-[60px] mb-10">
        {["New Arrival", "Best Seller", "Featured", "Special Offer"].map(
          (category, index) => (
            <h3
              key={index}
              className="text-[#151875] cursor-pointer font-medium hover:text-[#FB2E86] transition duration-300"
            >
              {category}
            </h3>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  flex flex-col items-center justify-between"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-full transition-transform transform hover:scale-105 duration-300"
            />

            <div className="flex justify-between gap-[70px] items-center my-2">
              <h3 className="text-sm font-semibold text-[#1A0B5B] ">
                {item.title}
              </h3>
              <div className="flex gap-1 items-center">
                <p className="text-gray-500 ">{item.disc}</p>
                <h4 className="text-sm font-bold text-[#FB2E86]">
                  {item.price}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
