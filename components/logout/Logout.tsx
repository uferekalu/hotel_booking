import Image from "next/image";
import React from "react";

interface ILogout {
  marginTop: string;
}

const Logout: React.FC<ILogout> = ({ marginTop }) => {
  return (
    <div className={`flex space-x-1 ml-3 cursor-pointer ${marginTop}`}>
      <Image
        src="/images/logout.png"
        width={30}
        height={30}
        alt="logout icon"
      />
      <h4 className="text-xs text-gray-600 mt-3">Logout</h4>
    </div>
  );
};

export { Logout };
