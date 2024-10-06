import Image from "next/image";
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Navbar2 />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div> */}
        {/* <ChatCard /> */}
      </div>
    </div>
  );
}
