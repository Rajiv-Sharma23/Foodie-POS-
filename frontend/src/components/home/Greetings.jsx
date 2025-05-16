import React from "react";
import { useEffect, useState } from "react";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center  rounded-xl p-2">
      <div className="">
        <h1>Welcome to Foodie, Rajiv</h1>
        <p className="text-sm text-gray-300">Give your best services for customers</p>
      </div>

      <div className="font-mono">
        <h1 className="">{dateTime.toLocaleTimeString()}</h1>
        <p className="text-sm text-gray-300 ">
          {dateTime.toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          }).replace(",", "")}
        </p>
      </div>
    </div>
  );
};

export default Greetings;
