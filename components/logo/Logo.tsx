import { useRouter } from "next/router";
import React from "react";

interface ILogo {
  fontSize: string;
}

const Logo: React.FC<ILogo> = ({ fontSize }) => {
  const router = useRouter();
  return (
    <div className="flex">
      <span className={`text-blue-950 font-medium ${fontSize}`}>Mima</span>
      <span className={`text-gray-800 font-medium ${fontSize}`}>Booking</span>
    </div>
  );
};

export { Logo };
