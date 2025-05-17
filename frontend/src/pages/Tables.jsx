import React, { useState } from "react";
import TableCard from "../components/tables/TableCard";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { tables } from "../constants/constants";

const Tables = () => {
  const [status, setStatus] = useState("All");
  const navigate = useNavigate();
  return (
    <section className="bg-one h-[calc(100vh-8rem)] overflow-auto gap-4 scrollbar-hide">
      <div className="flex justify-between px-10 sticky top-0 bg-one">
            <div className="flex items-center justify-between px-8 py-2 ">
            <button
                onClick={() => navigate("/")}
                className="bg-yellow-400 font-bold text-black p-1 px-2 text-2xl rounded-lg mr-3"
            >
                <IoMdArrowRoundBack size={30} />
            </button>
            <h1 className="text-2xl tracking-wider ">Tables</h1>
            </div>

            <div className="flex items-center  gap-6">
            <button
                onClick={() => setStatus("All")}
                className={`${status === "All" ? "btn22" : "btn2"}`}
            >
                All Tables
            </button>
            <button
                onClick={() => setStatus("Booked")}
                className={`${status === "Booked" ? "btn22" : "btn2"}`}
            >
                Booked
            </button>
            </div>
      </div>

      <div className="mx-20  my-5 flex flex-wrap gap-5 pb-5 justify-center "
      >
       {
        tables.map((table) => (
          <TableCard key={table.id} name={table.name} status={table.status} initials={table.initial}/>
        ))
       }
      </div>
    </section>
  );
};

export default Tables;
