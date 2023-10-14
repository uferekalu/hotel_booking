import { routes } from "@/utils/routes";
import Image from "next/image";
import React from "react";

interface IAllLinks {
  marginTop: string;
}

const AllLinks: React.FC<IAllLinks> = ({ marginTop }) => {
  return (
    <div className={`flex flex-col space-y-3 ml-5 ${marginTop}`}>
      {routes.map((route: string) => (
        <div key={route} className="flex space-x-1 cursor-pointer">
          <Image
            src={
              route === "Setting"
                ? "/images/setting.png"
                : route === "Favorites"
                ? "/images/favoriteicon.png"
                : route === "Ticket"
                ? "/images/ticketicon.png"
                : route === "Explore City"
                ? "/images/exploreicon.png"
                : "/images/dashboardicon.png"
            }
            width={24}
            height={24}
            alt="icon"
          />
          <h4 className="text-xs text-gray-600 mt-1">{route}</h4>
        </div>
      ))}
    </div>
  );
};

export { AllLinks };
