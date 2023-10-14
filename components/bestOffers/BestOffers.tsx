import React from "react";
import BestOffersContent from "./BestOffersContent";
import { bestOffers } from "@/utils/routes";

interface IBestOffers {}

const BestOffers: React.FC<IBestOffers> = ({}) => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between">
        <span className="flex sm:text-sm text-sm font-medium text-gray-700">
          Best Offers
        </span>
        <div className="flex text-sm text-blue-950 font-medium -mt-1">
          View All
        </div>
      </div>
      <BestOffersContent items={bestOffers} />
    </div>
  );
};

export default BestOffers;
