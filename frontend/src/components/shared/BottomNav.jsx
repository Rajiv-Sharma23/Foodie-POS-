import { FaHome } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CgMoreVerticalR } from "react-icons/cg";
import { BiSolidDish } from "react-icons/bi";





const BottomNav = () => {
  return (
    <div className='bg-two p-2 flex justify-around items-center mt-2 fixed bottom-0 left-0 right-0'>
        <button className='btn gap-2 bg-[#613f70]'><FaHome /> <span >Home</span></button>
        <button className='btn gap-2'><MdOutlineBorderColor /> <span >Orders</span></button>
        <button className='btn gap-2'><MdTableBar /> <span >Tables</span></button>
        <button className='btn gap-2'><CgMoreVerticalR /> <span >More</span></button>
        <button className="bg-[#ebc310] text-black p-3 rounded-full absolute mb-6 items-center"><BiSolidDish size={30} className=""/></button>
    </div>
  )
}

export default BottomNav