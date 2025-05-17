import { FaHome } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CgMoreVerticalR } from "react-icons/cg";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-two p-2 flex justify-around items-center mt-2 fixed bottom-0 left-0 right-0">
      <button onClick={() => navigate("/")} className="btn">
        <FaHome size={30}/> <span>Home</span>
      </button>
      <button onClick={() => navigate("/orders")} className="btn">
        <MdOutlineBorderColor size={30}/> <span>Orders</span>
      </button>
      <button onClick={() => navigate("/tables")} className="btn">
        <MdTableBar size={30}/> <span>Tables</span>
      </button>
      <button onClick={() => navigate("/more")} className="btn">
        <CgMoreVerticalR size={30}/> <span>More</span>
      </button>
      <button className="bg-[#ebc310] text-black p-3 rounded-full absolute mb-6 items-center">
        <BiSolidDish size={30} className="" />
      </button>
    </div>
  );
};

export default BottomNav;
