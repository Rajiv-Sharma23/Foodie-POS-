import { FaHome } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CgMoreVerticalR } from "react-icons/cg";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BottomNav = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Home");

  return (
    <div className="bg-two p-2 flex justify-around items-center mt-2 fixed bottom-0 left-0 right-0">
      <button
        // onClick={() => navigate("/")}
        onClick={() => {
          navigate("/");
          setStatus("Home");
        }}
        className={`${
          status === "Home" ? "btn" : "flex text-2xl gap-2 font-semibold"
        }`}
      >
        <FaHome size={30} /> <span>Home</span>
      </button>
      <button
       onClick={() => {navigate("/orders"); setStatus("Orders");}}
        className={`${
          status === "Orders" ? "btn" : "flex text-2xl gap-2 font-semibold"
        }`}
      >
        <MdOutlineBorderColor size={30} /> <span>Orders</span>
      </button>
      <button
        onClick={() => (navigate("/tables"), setStatus("Tables"))}
        className={`${
          status === "Tables" ? "btn" : "flex text-2xl gap-2 font-semibold"
        }`}
      >
        <MdTableBar size={30} /> <span>Tables</span>
      </button>
      <button
        onClick={() => (navigate("/more"), setStatus("More"))}
        className={`${
          status === "More" ? "btn" : "flex text-2xl gap-2 font-semibold"
        }`}
      >
        <CgMoreVerticalR size={30} /> <span>More</span>
      </button>
      <button className="bg-[#ebc310] text-black p-3 rounded-full absolute mb-6 items-center">
        <BiSolidDish size={30} className="" />
      </button>
    </div>
  );
};

export default BottomNav;
