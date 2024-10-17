import React from "react";
import lampa from "../../assets/lampa.png";
import hero from "../../assets/herodivan.png";

export default function BannerSlider() {
  return (
    <div className="bg-[#F2F0FF] w-full h-[70vh]">
      <div className="max-w-[1200px] m-auto my-20 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-[22px] items-center justify-between">
          <div className="w-full md:w-auto">
            <img
              src={lampa}
              alt="Lampa"
              className="object-contain max-h-[300px] drop-shadow-lg transition-transform transform hover:scale-105 duration-300"
            />
          </div>

          <div className=" text-center my-14 md:text-left flex flex-col items-center md:items-start w-full md:w-1/2">
            <h4 className="text-[#FB2E86] text-lg font-semibold mb-4">
              Best Furniture For Your Castle....
            </h4>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              New Furniture Collection Trends in 2020
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="bg-[#FB2E86] px-8 py-3 text-white rounded-md transition duration-300 hover:bg-[#e12b7d] hover:shadow-lg">
              Shop Now
            </button>
          </div>

          <div className="w-full md:w-auto">
            <img
              src={hero}
              alt="Hero Divan"
              className="object-contain max-h-[300px] drop-shadow-lg transition-transform transform hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .max-h-[300px] {
            max-height: 200px;
          }
          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}
