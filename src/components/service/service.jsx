import React from 'react'
import data from '../../data/data'

export default function Service() {
  return (
    <div className="max-w-[1200px] m-auto my-20 px-4">
      <h1 className="text-3xl text-center text-[#151875] font-bold mb-10">
        What Shopex Offer!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.service.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
          >
            <div className="w-full h-32 mb-4 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="object-contain h-full"
              />
            </div>

            <h4 className="text-lg font-bold text-[#1A0B5B] mb-2">
              {item.title}
            </h4>

            <p className="text-gray-500">
              {item.disc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
