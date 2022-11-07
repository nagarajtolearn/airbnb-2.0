import Image from "next/image";
import {
  HiMagnifyingGlass,
  HiGlobeAlt,
  HiUserCircle,
  HiUser,
} from "react-icons/hi2";

import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          className="object-contain object-left"
          fill
        />
      </div>
      {/* middle - search */}
      <div className=" flex items-center md:border-2 justify-between rounded-full py-2 ">
        <input
          type="text"
          className=" pl-5 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
        />
        <HiMagnifyingGlass className=" hidden md:inline-flex rounded-full cursor-pointer bg-red-400 text-white h-8 w-8 p-2 md:mx-2" />
      </div>
      {/* right */}
      <div className="flex space-x-4 justify-end items-center text-gray-500">
        <p className=" hidden md:inline cursor-pointer">Become a host</p>
        <HiGlobeAlt className="h-6 text-xl cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <FiMenu className="h-6 text-xl cursor-pointer" />
          <HiUserCircle className="h-6 text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
