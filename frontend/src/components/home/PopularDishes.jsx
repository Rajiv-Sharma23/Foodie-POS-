import React from "react";
import { popularDishes } from "../../constants/constants";

const PopularDishes = () => {
  return (
    <div className="my-2 mr-4">
      <div className="card2">
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
              className="card1"
            >
                <h1>{ index < `9` ? `0${index + 1}` : index + 1 }</h1>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-12 h-12 object-cover rounded-xl"
              />
              <div className="flex flex-col gap-1">
                <h2 >{dish.name}</h2>
                <p>{dish.numberOfOrders} <span className="text-white">orders</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
