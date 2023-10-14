import React from "react";
import { cardsInfo } from "@/utils/routes";
import TrendingContent from "./TrendingContent";

interface ITrendingDest {}

const TrendingDestinations: React.FC<ITrendingDest> = ({}) => {
  return (
    <div className="flex flex-col mt-2 p-2">
      <div className="flex justify-between">
        <span className="flex sm:text-sm text-sm font-medium text-gray-700">
          Trending destinations
        </span>
        <div className="flex space-x-2 -mt-1">
          <div className="rounded-full border bg-white w-7 h-7 justify-center items-center py-1 px-2 text-xs font-medium cursor-pointer">
            {"<"}
          </div>
          <div className="rounded-full border bg-blue-950 w-7 h-7 justify-center items-center py-1 px-2 text-xs font-medium text-white cursor-pointer">
            {">"}
          </div>
        </div>
      </div>

      <TrendingContent items={cardsInfo} />
    </div>
  );
};

export default TrendingDestinations;
