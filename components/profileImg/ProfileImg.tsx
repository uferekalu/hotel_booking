import Image from "next/image";
import React from "react";

interface IProfileImg {
  marginTop: string;
}

const ProfileImg: React.FC<IProfileImg> = ({ marginTop }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center space-y-3 ${marginTop}`}
    >
      <Image
        src="/images/profile.png"
        width={110}
        height={110}
        alt="profile pic"
      />
      <h4 className="text-sm text-gray-600 font-medium">ilia jan</h4>
    </div>
  );
};

export { ProfileImg };
