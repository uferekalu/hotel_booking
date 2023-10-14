import { Card } from "@/utils/interface";
import Image from "next/image";
import React from "react";

interface ITrendingContent {
  items: Card[];
}

const TrendingContent: React.FC<ITrendingContent> = ({ items }) => {
  return (
    <>
    <div className={`grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 mt-3`}>
      {items.map((item: Card, idx: number) => (
        <div
          key={idx}
          className="flex space-x-2 rounded-lg shadow-lg bg-white w-full h-32 p-1"
        >
          <div className="w-1/2 h-full justify-center alignItems-center mt-3">
            <Image src={item.imgSrc} height={80} width={100} alt={item.name} />
          </div>
          <div className="flex flex-col space-y-2 mt-3">
            <div className="flex space-x-3">
              <span className="text-black font-bold text-sm">{item.name}</span>
              <div className="flex space-x-1 ml-5">
                <i className="bi bi-star-fill text-yellow-400"></i>
                <span className="text-black font-medium text-xs">
                  {item.rating}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600">{item.desc}</p>
            <span className="text-black font-weight text-sm">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
      <div className="flex justify-center items-center mx-auto mt-2 space-x-1">
        <div className="h-2 w-2 rounded-full bg-gray-500 cursor-pointer"></div>
        <div className="h-2 w-2 rounded-full bg-blue-900 cursor-pointer"></div>
        <div className="h-2 w-2 rounded-full bg-gray-500 cursor-pointer"></div>
      </div>
    </>
  );
};

export default TrendingContent;
