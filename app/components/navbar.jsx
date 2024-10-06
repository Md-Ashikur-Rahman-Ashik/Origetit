import Image from "next/image";
import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <>
      <div
        style={{ borderBottom: "3px" }}
        class="flex  justify-between items-center bg-white p-4"
      >
        <Image
          width={200}
          height={200}
          src="/images/logo.png"
          alt="Logo"
          class="h-10 w-10"
        />
        <div class="flex items-center p-2 border w-full max-w-lg mx-4 rounded-full focus:ring-2 focus:ring-2 focus:ring-blue-500">
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="What news are you looking for?"
            class="w-full   rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <Image src="/images/logo2.png" width={40} height={40} />
          <button class="flex items-center space-x-2 text-blue-600">
            <span>Login</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
