import React, { useState } from "react";
import { motion } from "framer-motion";
import { SearchBar } from "../searchBar/SearchBar";
import { Notifcation } from "../notification/Notification";
import { Logo } from "../logo/Logo";
import { Section } from "../layout/Section";
import { ProfileImg } from "../profileImg/ProfileImg";
import { AllLinks } from "../allLinks/AllLinks";
import { Logout } from "../logout/Logout";

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex justify-between py-2 px-4 w-full h-12 bg-white rounded-lg shadow-lg">
        <div className="flex sm:hidden">
          <Logo fontSize="xs" />
        </div>
        <div className="hidden sm:flex">
          <SearchBar />
        </div>
        <div className="flex space-x-2 ">
          <Notifcation />
          <div className="flex sm:hidden -mt-1">
            <i
              onClick={handleToggleMenu}
              className={
                toggleMenu
                  ? "bi bi-x-circle-fill font-bold text-black text-2xl ease-in duration-300"
                  : "bi bi-list text-2xl text-black font-bold ease-in duration-300"
              }
            ></i>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex space-x-3">
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              id="togglebar"
              className="absolute z-50 top-20 -mt-1 sm:w-1/2 w-5/6 sm:right-6 right-0 rounded-lg shadow-lg"
            >
              <Section
                width="w-full"
                height="h-1/4"
                otherClassName="bg-white rounded-lg shadow-lg -mt-6 p-3 flex flex-col space-y-4"
              >
                <ProfileImg marginTop="mt-2" />
                <span className="text-xs text-gray-800">
                  Saturday, may 3, 2023
                </span>
                <SearchBar />
                <AllLinks marginTop="2" />
                <Logout marginTop="2"/>
              </Section>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export { Header };
