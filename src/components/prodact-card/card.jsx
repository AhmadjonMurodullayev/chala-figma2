import React from "react";
import data from "../../data/data";

export default function Card() {
  return (
    <div className="w-full bg-[#F1F0FF] ">
      <div className="max-w-[1200px] mx-auto px-4">
        <div>
          {data.features.map((item) => {
            return (
              <div
                className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 my-6  "
                key={item.id}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto max-w-[250px] md:max-w-full mx-auto"
                  />
                </div>
                <div className="flex flex-col gap-3 w-full md:w-2/3 text-center md:text-left my-16">
                  <h2 className="text-[#1A0B5B] text-2xl md:text-3xl font-bold">
                    {item.title}
                  </h2>
                  <div className="flex justify-center md:justify-start items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#FB2E86]"></div>
                    <p className="text-[#ACABC3]">{item.disc1}</p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#151875]"></div>
                    <p className="text-[#ACABC3]">{item.disc2}</p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#2BF5CC]"></div>
                    <p className="text-[#ACABC3]">{item.disc3}</p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 mt-4">
                    <button className="border-none bg-[#FB2E86] text-white px-6 py-2 rounded-md">
                      Add To Cart
                    </button>
                    <div className="flex flex-col items-center md:items-start">
                      <h4 className="text-[#151875] font-bold">
                        B&B Italian Sofa
                      </h4>
                      <h4 className="text-[#151875]">$32.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
