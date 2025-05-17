import { useState } from "react";
import OrderCard from "../components/orders/OrderCard";
import BottomNav from "../components/shared/BottomNav";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Orders = () => {
  const [status, setStatus] = useState("All Items");
  const navigate = useNavigate();
  return (
    <section className="bg-one h-[calc(100vh-9rem)] overflow-auto  gap-4 ">
      <div className="flex items-center justify-between px-8 py-2 sticky top-0 bg-one">
        <h1 className="text-2xl tracking-wider ">Orders</h1>
        <div className="flex items-center justify-around gap-4 ">

           <button 
           onClick={() => navigate("/")}
           className="bg-yellow-400 font-bold text-black p-1 px-2 text-2xl rounded-lg">
            <IoMdArrowRoundBack size={30} />
          </button>

          <button
            onClick={() => setStatus("All Items")}
            className={`${status === "All Items" ? "btn22" : "btn2"}`}
          >
            All Items
          </button>
          <button
            onClick={() => setStatus("IN Progress")}
            className={`${status === "IN Progress" ? "btn22" : "btn2"}`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("Ready")}
            className={`${status === "Ready" ? "btn22" : "btn2"}`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("Complete")}
            className={`${status === "Complete" ? "btn22" : "btn2"}`}
          >
            Complete
          </button>

         
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6  px-10 my-2 overflow-y-scroll h-[calc(100vh-15rem)] scrollbar-hide scroll-smooth ">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>

      <div className="">
        <BottomNav />
      </div>
    </section>
  );
};

export default Orders;
