import Image from "next/image";
import React from "react";

function LargeCard({ img, description, title, buttonText }) {
  return (
    <section className=" relative cursor-pointer my-10">
      <div className="relative h-96 min-w-[300px] object-cover">
        <Image src={img} fill className="rounded-3xl" />
      </div>
      <div className="absolute top-12 left-12">
        <h3 className="text-4xl w-64 mb-3">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 rounded-lg px-4 py-2 mt-5 hover:scale-105">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
