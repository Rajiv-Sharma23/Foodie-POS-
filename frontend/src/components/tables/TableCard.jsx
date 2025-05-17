import RandomColors from "../../utils/randomcolor";
import { useMemo } from "react";

const TableCard = ({ name, status, initials }) => {
  const bgColor = useMemo(() => RandomColors(), []);
  return (
    <div className="bg-gray-700 w-[250px] p-4 rounded-lg hover:cursor-pointer">
      <div className="flex items-center justify-between">
        <h2 className="text-xl"> {name}</h2>
        <p
          className={`${
            status === "Booked"
              ? "text-white font-semibold bg-[#fd008b]"
              : "text-green-400 font-semibold bg-[#146449]"
          } p-1 px-2 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-4">
        <h1
          className="text-white rounded-full p-4"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
