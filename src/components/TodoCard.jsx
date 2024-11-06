import img1 from "../assets/pro-image (2).png"
import img2 from "../assets/pro-image (4).png"
import img3 from "../assets/pro-image (8).png"
import img4 from "../assets/pro-image (9).png"

import { RiStackFill } from "react-icons/ri";
import { FaClipboardList, FaRegComments } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { FaRegCalendarDays } from "react-icons/fa6";

const TodoCard = () => {
    return (
        <div className="bg-white p-2 m-2 rounded-md">
            <div className="flex text-xs justify-between mb-3">
                <div className="flex text-xs items-center gap-1">
                    <img className="w-6 h-6" src={img1} alt="pro-image" />
                    <h2 className="font-semibold">Client Name</h2>
                </div>
                <div className="flex text-xs items-center gap-1">
                    <img className="w-6 h-6" src={img2} alt="pro-image" />
                    <h2 className="font-semibold">Sadik Istiak</h2>
                </div>
            </div>

            <div className="flex text-xs justify-between mb-3">
                <div className="flex text-xs items-center gap-1">
                    <RiStackFill />
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="flex text-xs items-center gap-1 bg-gray-300 p-1 rounded-md">
                    <FaClipboardList />
                    <p>1/2</p>
                </div>
            </div>

            <div className="flex text-xs items-center justify-between gap-1.5">
                <img className="w-6 h-6" src={img3} alt="pro-image" />
                <img className="w-6 h-6" src={img4} alt="pro-image" />
                <p className="bg-gray-300 px-0.5 py-1 rounded-full">12+</p>
                <FaRegComments />
                <p>15</p>
                <GrAttachment />
                <p>25</p>
                <FaRegCalendarDays />
                <p>30-12-2022</p>
            </div>
        </div>
    );
};

export default TodoCard;