import { FcOk } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";


const OrderList = () => {
  return (
    <div className="flex my-1 gap-4  p-2 rounded-2xl">
      <button className="bg-yellow-400 font-bold text-black p-1 text-2xl rounded-lg">
        RS
      </button>
      <div className="flex justify-between items-center gap-4 w-full">
        <div>
          <h1>Rajiv Sharma</h1>
          <p className="text-gray-400">8 items</p>
        </div>

        <div>
          <h2 className="text-yellow-500 border border-yellow-500  px-2 rounded-lg">
            Table: 1
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex gap-2 items-center "><FcOk className="text-2xl"/><span>Ready</span></p>
          <p className="text-green-500 flex"><span><GoDotFill size={25}/></span> Ready to serve</p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
