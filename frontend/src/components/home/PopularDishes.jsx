import React from "react";
import { popularDishes } from "../../constants/constants";

const PopularDishes = () => {
  return (
    <div className="mt-4 mr-4">
      <div className="bg-two w-full rounded-2xl hover:cursor-pointer">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <h2>Popular Dishes</h2>
          <a href="#" className="text-blue-500 text-sm font-bold">
            View All
          </a>
        </div>

        {/* Dishes */}
        <div className="overflow-y-scroll h-[490px] scrollbar-hide scroll-smooth">
          {popularDishes.map((dish, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-one rounded-xl px-4 p-2  m-3"
            >
                <h1>{ index < `9` ? `0${index + 1}` : index + 1 }</h1>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-12 h-12 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold">{dish.name}</h2>
                <p className="text-sm text-gray-400">{dish.numberOfOrders} <span className="text-white">orders</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
