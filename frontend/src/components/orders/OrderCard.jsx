import React from "react";
import { FcOk } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";

const OrderCard = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col bg-gray-800   p-4  rounded-2xl hover:cursor-pointer w-[400px] ">
        <div className="1 flex items-center  gap-4 mb-4 ">
          <button className="bg-yellow-400 font-bold text-black p-1 px-2 text-2xl rounded-lg ">
            RS
          </button>

          <div className="flex justify-between items-center gap-4 w-full text-sm font-semibold">
            <div>
              <h1>Rajiv Sharma</h1>
              <p className="text-gray-500">#101/ Dine in</p>
            </div>

            {/* <div>
            <h2 className="text-yellow-500 border border-yellow-500  px-2 rounded-lg">
              Table: 1
            </h2>
          </div> */}
            <div className="flex flex-col items-center gap-2 ">
              <p className="flex gap-2 items-center border-2 p-1 border-lime-500 px-2 rounded-2xl">
                <FcOk className="text-xl" />
                <span className="">Ready</span>
              </p>
              <p className="text-gray-500 flex items-center">
                <span>
                  <GoDotFill size={25} className="text-green-600" />
                </span>{" "}
                Ready to serve
              </p>
            </div>
          </div>
        </div>
        <div className="2 flex justify-between text-sm font-semibold text-gray-500 px-1">
          <p>May 17, 2023 01:19 PM</p>
          <p>8 Items</p>
        </div>

        <hr className="border-gray-500 mt-2 w-full" />

        <div className="3 flex justify-between text-lg text-gray-200 mt-2  font-bold ">
          <p>Total</p>
          <p>₹ 100.00</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
