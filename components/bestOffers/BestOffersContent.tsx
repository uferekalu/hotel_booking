import React from "react";
import { IBestOffer } from "@/utils/interface";
import Image from "next/image";

interface IBestOffersContent {
  items: IBestOffer[];
}

const BestOffersContent: React.FC<IBestOffersContent> = ({ items }) => {
  return (
    <>
      <div
        className={`grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-4 mt-3`}
      >
        {items.map((item: IBestOffer, idx: number) => (
          <div
            key={idx}
            className="flex flex-col space-y-2 rounded-lg shadow-lg bg-white w-full h-60 px-1"
          >
            <div className="w-full h-1/2 justify-center alignItems-center mx-auto mt-3">
              <Image
                className="mx-auto"
                src={item.imgSrc}
                height={64}
                width={200}
                alt={item.name}
              />
            </div>
            <div className="flex flex-col p-1 space-y-2">
              <span className="text-gray-800 font-bold text-sm">
                {item.name}
              </span>
              <div className="flex space-x-2">
                <i className="bi bi-geo-alt text-xs"></i>
                <span className="text-xs text-gray-600">{item.location}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  <span className="text-gray-800 text-lg font-bold">
                    {item.rate}
                  </span>
                  <span className="text-gray-600 text-xs mt-2">/night</span>
                </div>
                <div className="flex w-6 h-6 border rounded-full p-1 justify-center items-center">
                  <i className="bi bi-heart text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestOffersContent;
