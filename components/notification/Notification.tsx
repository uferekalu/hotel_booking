import React from "react";

const Notifcation = () => {
  return (
    <div className="flex space-x-2 mt-1">
      <span className="hidden sm:flex text-xs text-gray-800">Saturday, may 3, 2023</span>
      <div className="flex space-x-1">
        <span className="bg-red-600 rounded-full w-5 h-5 text-center text-xs text-white -mt-2 cursor-pointer">
          3
        </span>
        <div className="border rounded-full p-1 text-center -mt-2 cursor-pointer">
          <i className="bi bi-bell"></i>
        </div>
      </div>
    </div>
  );
};

export { Notifcation };
