import React from "react";
import { ImSearch } from "react-icons/im";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="bg-two p-3 rounded-2xl mt-2 mb-2 flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-sm">Recent Orders</h2>
        <a href="" className="text-blue-500 font-bold text-sm">
          View All
        </a>
      </div>
      {/* search */}
      <div className="flex items-center gap-2 rounded-md bg-four p-1 pl-2 ">
        <ImSearch />
        <input
          type="text"
          placeholder="search recent orders"
          className=" text-lg w-[200px] text-black border-none outline-none pl-4"
        />
      </div>
      {/* orders */}
      <div className="overflow-y-scroll h-[220px] scrollbar-hide">
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
      </div>
    </div>
  );
};

export default RecentOrders;
