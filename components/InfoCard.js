import React from "react";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import { HiStar } from "react-icons/hi";

function InfoCard({ img, location, title, desctiption, star, price, total }) {
  return (
    <section
      className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-2 transform duration-200 ease-out
        first:border-t
    "
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 object-cover m-2 flex-shrink-0">
        <Image src={img} fill className="rounded-2xl " />
      </div>

      <div className=" flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>Premium stay in {location}</p>
          <HiOutlineHeart className="h-7 cursor-pointer" />
        </div>
        <h4 className=" font-semibold  text-xl">{title}</h4>
        <div className="border-b w-10 pt-2 " />
        <p className="text-sm text-gray-400 flex-grow">{desctiption}</p>
        <div className="flex justify-between mb-2 pr-2">
          <div className="flex justify-between items-end pt-5">
            <p className="flex items-center">
              <HiStar className="h-5 text-red-400" />
              {star}
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg lg:tex-2xl text-gray-800">
              {price}
            </p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
