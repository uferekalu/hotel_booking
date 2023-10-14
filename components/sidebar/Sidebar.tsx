import React from "react";
import { Logo } from "../logo/Logo";
import { ProfileImg } from "../profileImg/ProfileImg";
import { AllLinks } from "../allLinks/AllLinks";
import { Logout } from "../logout/Logout";

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = ({}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Logo fontSize="text-lg" />
      </div>
      <ProfileImg marginTop="mt-3" />
      <AllLinks marginTop="mt-20" />
      <Logout marginTop="mt-36" />
    </>
  );
};

export { Sidebar };
