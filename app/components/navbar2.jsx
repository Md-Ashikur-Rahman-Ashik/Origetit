import { FaBars } from "react-icons/fa6";
import React from "react";
import { FaFilter } from "react-icons/fa";

function Navbar2() {
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b-2">
        {/* Menu Icon */}
        <FaBars color="#0FA7E6" size={30} />

        {/* Topic Section */}
        <div className="flex flex-wrap gap-2 items-center">
          {/* Active Topic */}
          <span className="flex items-center gap-2 text-center font-bold text-xl md:text-2xl lg:text-3xl">
            <FaFilter />
            Topics:
          </span>

          {/* Active Button */}
          <button className="font-bold bg-[#0FA7E6B2] text-black rounded-full px-3 py-1 text-sm md:text-base focus:outline-none">
            CROWN PRINCE
          </button>

          {/* Other Topic Buttons */}
          <button className="border font-medium border-gray-400 text-gray-600 rounded px-3 py-1 text-sm md:text-base focus:outline-none">
            FALCON LLM
          </button>
          <button className="border font-medium border-gray-400 text-gray-600 rounded px-3 py-1 text-sm md:text-base focus:outline-none">
            UAE LEADERSHIP
          </button>
          <button className="border font-medium border-gray-400 text-gray-600 rounded px-3 py-1 text-sm md:text-base focus:outline-none">
            ATRC
          </button>
          <button className="border font-medium border-gray-400 text-gray-600 rounded px-3 py-1 text-sm md:text-base focus:outline-none">
            COP 28
          </button>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Navbar2;
