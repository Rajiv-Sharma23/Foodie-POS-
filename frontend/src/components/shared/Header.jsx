import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";

export default function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex justify-between items-center px-16 py-4 bg-two border-b-4 border-three text-white shadow-md">
      {/* Restaurant Name / Logo */}
      <div className="text-2xl font-bold tracking-wide">🍽️ Foodie POS</div>

      <div className="flex items-center gap-2 rounded-md bg-four p-1 pl-2">
        {/* search */}
        <ImSearch />
        <input
          type="text"
          placeholder="search"
          className=" text-lg w-[200px] text-black border-none outline-none"
        />
      </div>

      {/* Live Date & Time */}
      <div className="text-lg font-mono font-bold ">
        {dateTime.toLocaleDateString()} — {dateTime.toLocaleTimeString()}
      </div>

      {/* User / Staff Icon */}
      <div className="flex items-center gap-3">
        <div>
          <IoMdNotifications className="text-3xl" />
        </div>
        <FaUserCircle className="text-3xl" />
        <div className="flex flex-col">
          <h1 className="text-lg">John Doe</h1>
          <p className="text-sm text-gray-300"> Admin</p>
        </div>
      </div>
    </header>
  );
}
