import { FaBars } from "react-icons/fa6";
import React from "react";
import { Button } from "@/components/ui/button";
import { Bold } from "lucide-react";
import { FaFilter } from "react-icons/fa";
function Navbar2() {
  return (
    <>
      {" "}
      <div
        style={{ borderBottom: "3px" }}
        class="flex  justify-between items-center p-4"
      >
        <FaBars color="#0FA7E6" size={30} />
        <div className="flex flex-wrap gap-2">
          {/* Active Topic Button */}

          <span className="flex gap-2 text-center  text-bold text-3xl ">
            <FaFilter />
            Topics:
          </span>
          <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm focus:outline-none">
            CROWN PRINCE
          </button>

          {/* Other Topic Buttons */}
          <button className="border border-gray-400 text-gray-600 rounded px-3 py-1 text-sm focus:outline-none">
            FALCON LLM
          </button>
          <button className="border border-gray-400 text-gray-600 rounded px-3 py-1 text-sm focus:outline-none">
            UAE LEADERSHIP
          </button>
          <button className="border border-gray-400 text-gray-600 rounded px-3 py-1 text-sm focus:outline-none">
            ATRC
          </button>
          <button className="border border-gray-400 text-gray-600 rounded px-3 py-1 text-sm focus:outline-none">
            COP 28
          </button>
        </div>
        <div className="flex gap-2"></div>
      </div>
    </>
  );
}

export default Navbar2;
