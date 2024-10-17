import React from "react";
import data from "../../data/data.js";
import Products from "../products/products.jsx";
import Service from "../service/service.jsx";

export default function Productlayout() {
  return (
    <div className="max-w-[1200px] m-auto my-6 px-4">
      <h1 className="text-3xl text-center text-[#1A0B5B] font-bold mb-8">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.hero.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center justify-between"
            >
              <div className="w-full h-64 overflow-hidden rounded-md mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform transform hover:scale-105 duration-300"
                />
              </div>

              <div className="p-2 w-full text-center hover:bg-[#2F1AC4]">
                <h3 className="text-lg font-semibold text-[#1A0B5B] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 mb-2">{item.disc}</p>
                <h4 className="text-xl font-bold text-[#FB2E86]">
                  {item.price}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <Products/>
      <Service/>
    </div>
  );
}
