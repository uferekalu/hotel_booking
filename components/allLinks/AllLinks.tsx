import React, { useEffect, useState } from "react";
import { routes } from "@/utils/routes";
import Image from "next/image";
import { useRouter } from "next/router";

interface IAllLinks {
  marginTop: string;
}

const AllLinks: React.FC<IAllLinks> = ({ marginTop }) => {
  const [routeName, setRouteName] = useState<string | null>(null);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (routeName === "Setting") {
      router.push(`/setting`);
    }
    if (routeName === "Favorites") {
      router.push(`/favorites`);
    }
    if (routeName === "Ticket") {
      router.push(`/ticket`);
    }
    if (routeName === "Explore City") {
      router.push(`/explorecity`);
    }
    if (routeName === "Dashboard") {
      router.push(`/`);
    }
  }, [routeName, router]);

  const handleClick = (name: string) => {
    setRouteName(name);
  };

  const handleMouseEnter = (name: string) => {
    setRouteName(name)
  }
  return (
    <div className={`flex flex-col space-y-3 ml-5 ${marginTop}`}>
      {routes.map((route: string) => {
        let result = "";
        pathname === "/setting"
          ? (result = "Setting")
          : pathname === "/favorites"
          ? (result = "Favorites")
          : pathname === "/ticket"
          ? (result = "Ticket")
          : pathname === "/explorecity"
          ? (result = "Explore City")
          : (result = "Dashboard");
        return (
          <div
            key={route}
            className="flex space-x-1 cursor-pointer"
            onClick={() => handleClick(route)}
            // onMouseEnter={() =>handleMouseEnter(route)}
          >
            {result === route && <i className="bi bi-dot -ml-5"></i>}
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
            <h4
              className={`${
                result === route
                  ? "text-blue-950 font-medium text-xs"
                  : "text-gray-600 text-xs "
              }  mt-1 hover:text-blue-950 hover:font-medium`}
            >
              {route}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export { AllLinks };
