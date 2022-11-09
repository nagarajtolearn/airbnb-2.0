import Image from "next/image";
import {
  HiMagnifyingGlass,
  HiGlobeAlt,
  HiUserCircle,
  HiUser,
} from "react-icons/hi2";

import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import path from "path";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        className=" relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col mx-auto col-span-3 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="font-semibold text-2xl flex-grow">
              Number of Guests
            </h2>
            <HiUser />
            <input
              type="number"
              value={noOfGuests}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex justify-around items-center">
            <button
              className=" text-gray-400 rounded-full py-2 px-4 cursor-pointer hover:bg-red-400 hover:text-white font-semibold"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className=" text-red-400 rounded-full py-2 px-4 cursor-pointer hover:bg-red-400 hover:text-white font-semibold"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
