import { FaHome } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CgMoreVerticalR } from "react-icons/cg";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Home");
  const [guestCount,setGeustCount] = useState(0);
  const [isModelOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const increment = () => {
    setGeustCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (guestCount > 0) {
      
      setGeustCount((prev) => prev - 1);
    }
  }

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
        onClick={() => {
          navigate("/orders");
          setStatus("Orders");
        }}
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
      <button
        className="bg-[#ebc310] text-black p-3 rounded-full absolute mb-6 items-center cursor-pointer"
        onClick={openModal}
      >
        <BiSolidDish size={30} className="" />
      </button>

      <Modal isOpen={isModelOpen} onClose={closeModal} title="Create Order">
        <div>
          <label
            htmlFor="my-modal"
            className="block mb-2 font-medium text-white text-lg"
          >
            Customer Name
          </label>
          <div className="flex my-1 items-center rounded-lg p-3 px-4 bg-gray-700">
            <input
              name=""
              type="text"
              placeholder="Enter Customer Name"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="my-modal"
            className="block mb-2 font-medium text-white text-lg"
          >
            Number
          </label>
          <div className="flex my-1 items-center rounded-lg p-3 px-4 bg-gray-700">
            <input
              name=""
              type="number"
              placeholder="+91 1234567890"
              className="bg-transparent flex-1 text-white focus:outline-none "
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="my-modal"
            className="block mb-2 font-medium text-white text-lg"
          >
            Guest
          </label>
          <div className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg">
            <button className="text-orange-400 text-3xl font-bold" onClick={decrement}>
              &minus;
            </button>
            <span className="text-white font-semibold text-xl">{guestCount} Person</span>
            <button className="text-orange-400 text-3xl font-bold" onClick={increment}>
              &#43;
            </button>
          </div>
        </div>
        <button className="btn22 w-full mt-8 cursor-pointer " onClick={() => navigate("/tables")}>
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
