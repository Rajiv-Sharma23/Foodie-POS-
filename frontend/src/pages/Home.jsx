import React from "react";
import BottomNav from "../components/shared/BottomNav.jsx";
import Greetings from "../components/home/Greetings.jsx";
import MiniCard from "../components/home/MIniCard.jsx";
import { GiProgression } from "react-icons/gi";
import { TbCoinRupee } from "react-icons/tb";
import RecentOrders from "../components/home/RecentOrders.jsx";
import PopularDishes from "../components/home/PopularDishes.jsx";

const Home = () => {
  return (
    <>
      <section className="bg-one h-[calc(100vh-7rem)] overflow-auto flex gap-4  ">
        {/* left section */}

        <div className="flex-[3] bg-one p-4 rounded-3xl  ml-4 ">
          <Greetings />

          <div className="flex items-center w-full gap-3 px-2 mt-4">
            <MiniCard
              title="Total Earnings"
              icon={<TbCoinRupee className="text-4xl text-yellow-500" />}
              number={512}
              footerNo={1.6}
            />
            <MiniCard
              title="In Progress"
              icon={<GiProgression className="text-4xl text-green-500" />}
              number={241}
              footerNo={1.6}
            />
          </div>

          <div className="my-3 px-2 " >
            <RecentOrders/>
          </div>
        </div>
        {/* right section */}

        <div className="flex-[2]  ">
          <PopularDishes/>
        </div>
      </section>
     
    </>
  );
};

export default Home;
